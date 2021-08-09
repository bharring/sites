import { Auth } from '@aws-amplify/auth';
import { generate } from '@graphql-codegen/cli';
import { Types } from '@graphql-codegen/plugin-helpers';
import { config } from 'dotenv';
import { writeFileSync } from 'fs';

config();
const { REACT_APP_GQL_SCHEMA_EMAIL, REACT_APP_GQL_SCHEMA_PASSWORD, REACT_APP_AUTH_OPTIONS, REACT_APP_GQL_URL } = process.env;

(async () => {
  try {
    const authCconfig = JSON.parse(REACT_APP_AUTH_OPTIONS as string);
    Auth.configure(authCconfig);
    await Auth.signIn(REACT_APP_GQL_SCHEMA_EMAIL as string, REACT_APP_GQL_SCHEMA_PASSWORD as string);
    const token = (await Auth.currentSession()).getAccessToken().getJwtToken();
    const generatedFiles: Types.FileOutput[] = await generate(
      {
        overwrite: true,
        schema: {
          [REACT_APP_GQL_URL as string]: {
            headers: {
              Authorization: token,
            },
          },
        },
        documents: 'src/**/*.graphql',
        generates: {
          'src/models/server/schema.graphql': {
            plugins: ['schema-ast'],
          },
          'src/models/server/schema.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo', 'fragment-matcher'],
          },
        },
      },

      true,
    );

    generatedFiles.forEach(({ filename, content }) => writeFileSync(filename, content));
  } catch (err) {
    console.error(err);
  }
})();

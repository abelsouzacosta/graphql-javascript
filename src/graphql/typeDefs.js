import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import path from "path";

// assemble an array with all types defined on application
const typesArray = fileLoader(path.join(__dirname, "modules", "**", "*.gql"));
const typeDefs = mergeTypes(typesArray);

export default typeDefs;

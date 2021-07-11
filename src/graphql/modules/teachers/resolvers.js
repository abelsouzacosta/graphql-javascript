import Teacher from "../../../server/db/models/Teacher";

export default {
  Query: {
    teachers: () => Teacher.find(),
    teacher: (_, { id }) => Teacher.findById(id),
  },
  Mutation: {
    createTeacher: (_, { data }) => Teacher.create(data),
    updateTeacher: (_, { id, data }) =>
      Teacher.findByIdAndUpdate(id, data, {
        new: true,
      }),
    deleteTeacher: async (_, { id }) => {
      const deleted = await Teacher.findByIdAndDelete(id);

      return !!deleted;
    },
  },
};

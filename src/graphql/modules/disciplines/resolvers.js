import Discipline from "../../../server/db/models/Discipline";
import Teacher from "../../../server/db/models/Teacher";

export default {
  Discipline: {
    teacher: (discipline) => Teacher.findById(discipline.teacher),
  },

  Query: {
    disciplines: () => Discipline.find(),
    discipline: (_, { id }) => Discipline.findById(id),
  },
  Mutation: {
    createDiscipline: (_, { data }) => Discipline.create(data),
    updateDiscipline: (_, { id, data }) =>
      Discipline.findByIdAndUpdate(id, data, {
        new: true,
      }),
    deleteDiscipline: async (_, { id }) => {
      const deleted = await Discipline.findByIdAndDelete(id);

      return !!deleted;
    },
  },
};

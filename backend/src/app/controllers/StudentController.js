import Student from '../models/Student';

class StudentController {
  async index(request, response) {
    const { page = 1, per_page = 5 } = request.query;

    const { rows: students, count } = await Student.findAndCountAll({
      offset: (page - 1) * per_page,
      limit: per_page,
    });

    return response
      .set({ total_pages: Math.ceil(count / per_page) })
      .json(students);
  }

  async store(request, response) {
    const student = await Student.create(request.body);
    return response.status(201).json(student);
  }

  async update(request, response) {
    const { student } = request;
    const { name, email, age, birth, weigth, height } = await student.update(
      request.body
    );
    response.json({ name, email, age, birth, weigth, height });
  }
}

export default new StudentController();

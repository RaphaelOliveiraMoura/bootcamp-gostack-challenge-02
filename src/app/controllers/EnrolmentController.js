import Enrolment from '../models/Enrolment';

class EnrolmentController {
  async index(request, response) {
    const enrolments = await Enrolment.findAll({
      include: [
        { association: 'student', attributes: ['id', 'name', 'email'] },
        {
          association: 'plan',
          attributes: ['id', 'title', 'duration', 'price'],
        },
      ],
      order: [['start_date', 'DESC']],
    });
    return response.json(enrolments);
  }

  async store(request, response) {
    const student_id = request.params.studentId;
    const { start_date, plan_id } = request.body;
    const { plan, end_date } = request;
    const price = plan.price * plan.duration;

    const enrolment = await Enrolment.create({
      plan_id,
      student_id,
      price,
      start_date,
      end_date,
    });

    return response.json(enrolment);
  }

  async update(request, response) {
    // TODO ...
    return response.json({});
  }

  async delete(request, response) {
    const { id } = request.params;
    await Enrolment.destroy({ where: { id } });
    return response.json({ message: 'Enrolment successfully canceled' });
  }
}

export default new EnrolmentController();

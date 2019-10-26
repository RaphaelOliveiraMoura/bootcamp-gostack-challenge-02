import HelpOrder from '../models/HelpOrder';

class HelpOrderController {
  async index(request, response) {
    const helpOrders = await HelpOrder.findAll({
      where: { student_id: request.params.studentId },
    });
    return response.json(helpOrders);
  }

  async store(request, response) {
    const { question } = request.body;
    const helpOrder = await HelpOrder.create({
      student_id: request.params.studentId,
      question,
    });
    return response.json(helpOrder);
  }
}

export default new HelpOrderController();

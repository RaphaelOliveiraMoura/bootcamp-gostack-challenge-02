import Queue from '../../lib/Queue';
import AnswerHelpOrderMail from '../jobs/AnswerHelpOrderMail';
import HelpOrder from '../models/HelpOrder';

class AnswerHelpOrderController {
  async index(request, response) {
    const helpOrders = await HelpOrder.findAll({
      where: { answer: null },
    });
    return response.json(helpOrders);
  }

  async store(request, response) {
    const { helpOrder } = request;

    helpOrder.update({
      answer: request.body.answer,
      answer_at: new Date(),
    });

    await Queue.add(AnswerHelpOrderMail.key, {
      helpOrder,
    });

    return response.json(helpOrder);
  }
}

export default new AnswerHelpOrderController();

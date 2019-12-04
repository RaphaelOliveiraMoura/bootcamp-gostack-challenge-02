import { Op } from 'sequelize';
import Plan from '~/app/models/Plan';

class PlanController {
  async index(request, response) {
    const { page = 1, per_page = 5, q = '' } = request.query;

    const { rows: plans, count } = await Plan.findAndCountAll({
      where: {
        [Op.or]: [{ title: { [Op.iLike]: `%${q}%` } }],
      },
      offset: (page - 1) * per_page,
      limit: per_page,
    });

    return response
      .set({ total_pages: Math.ceil(count / per_page) })
      .json(plans);
  }

  async show(request, response) {
    const plans = await Plan.findByPk(request.params.id);
    return response.json(plans);
  }

  async store(request, response) {
    const plan = await Plan.create(request.body);
    return response.json(plan);
  }

  async update(request, response) {
    const { plan } = request;

    await plan.update(request.body);

    return response.json(plan);
  }

  async delete(request, response) {
    const { id } = request.params;

    await Plan.destroy({ where: { id } });

    return response.send();
  }
}

export default new PlanController();

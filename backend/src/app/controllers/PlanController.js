import Plan from '~/app/models/Plan';

class PlanController {
  async index(_request, response) {
    const plans = await Plan.findAll();
    return response.json(plans);
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

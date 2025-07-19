const { v4 } = require('uuid');
const { sequelize } = require('../models');

module.exports = (model) => {
  const getAll = ({
    attributes = ['*'],
    condition = {},
    order = [],
  } = {}) =>
    model.findAll({
      attributes: attributes,
      where: condition,
      order: order,
      raw: true,
    });

 
  const get = (fields) => model.findOne({ where: fields, raw: true });

  const getTransactional = async (
    fields,
    onAfterCommitCb,
    onSuccessCb,
    onFailCb
  ) => {
    const t = await sequelize.transaction();
    if (onAfterCommitCb) t.afterCommit(onAfterCommitCb);
    try {
      const res = await model.findOne(
        {
          where: fields,
          raw: true,
        },
        { transaction: t }
      );
      onSuccessCb?.();
      await t.commit();
      return res;
    } catch (error) {
      onFailCb?.();
      await t.rollback();
    }
  };
  const createBulk = async (dataArray) => {
    model.bulkCreate(dataArray).catch((e) => {
      console.log(`error when creating rows ${e}`);
      return e;
    });
  };
  const create = async (data) => {
    return model.create({ id: null, ...data }).catch((e) => {
      console.log(`error when creating row ${e}`);
      return e;
    });
  };
  
 

  const update = (data, id) => model.update(data, { where: { id }, raw: true });

  const updatev2 = (data, where) => model.update(data, where);

 

  const destroy = (id) => model.destroy({ where: { id } });

 

  return {
    getAll, 
    get,
    getTransactional,
    create, 
    update,
    destroy, 
    updatev2,
    createBulk
  };
};

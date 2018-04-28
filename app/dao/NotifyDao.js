const {tServerNotifys} = require('./db').db_tars;

const NotifyDao = {};


NotifyDao.getServerNotifyList = async(serverIds, curPage, pageSize) => {
    let where = {};
    where.server_id = serverIds || [];
    let options = {
        raw: true,
        where: where,
        order: [['notifytime', 'DESC']]
    };
    if (curPage && pageSize) {
        options.limit = pageSize;
        options.offset = pageSize * (curPage - 1);
    }
    return await tServerNotifys.findAll(options);
};


module.exports = NotifyDao;
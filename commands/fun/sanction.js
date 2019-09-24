module.exports.run = async (bot, message) => {
    let reaction = bot.lang.sanctionReaction.random();

    message.channel.send(reaction);
};

module.exports.config = {
    name: 'sanction',
    description: 'Sanction bot',
    alias: ['돌았냐', '뒤질래', '디질래', '맞을래', '제재', '죽을래', '처벌', '혼날래'],
    isOwnerOnly: false
};
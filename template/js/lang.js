"use strict";
var LANG_SELECT = getCookie('language');
var LNG = [];
$(document).ready(function() {
    if (LANG_SELECT != 'ru' && LANG_SELECT != 'en') LANG_SELECT = 'en';
    if (LANG_SELECT == 'ru') {
        LNG['ROLL_TIME'] = 'Вращение через ';
        LNG['APPLY_BET'] = 'Принято ';
        LNG['APPLY_TOTAL_BETS'] = ' всего ставок...';
        LNG['ROLL'] = '***ВРАЩЕНИЕ***';
        LNG['MIN_BET'] = 'Минимальная ставка: ';
        LNG['MAX_BET'] = ', максимальная ставка: ';
        LNG['BETS_PER_ROUND'] = ', кол-во ставок за раунд: ';
        LNG['TIME_ROUND'] = ', длительность раунда: ';
        LNG['CHAT'] = ', чат: ';
        LNG['SEC_COOLDOWN'] = ' сек. задержки (';
        LNG['AMOUNT_TOTALBETS_CHAT'] = '+ EN общая сумма ставок)';
        LNG['COINS'] = ' монет';
        LNG['SEC'] = ' сек';
        LNG['BET'] = 'Ставка #';
        LNG['CONFIRMED'] = ' принята ';
        LNG['GENERATE_TOKEN'] = 'Генерация токена...';
        LNG['AUTHORIZATION_STEAM'] = 'Пожалуйста, авторизуйтесь на сайте через Steam.';
        LNG['SERVER_CONNECT'] = 'Подключение к серверу...';
        LNG['CONNECTED'] = 'Подключено!';
        LNG['ERROR_CONNECTION_CLOSED'] = 'Ошибка: Соединение закрыто.';
        LNG['CONNECTION_ABORT'] = 'Соединение разорвано...';
        LNG['ERROR_NO_TOKEN'] = 'Ошибка: Не получен ключ доступа.';
        LNG['ALREADY_CONNECTED'] = 'Ошибка: Подключение уже существует.';
        LNG['OWNER'] = '[Владелец] ';
        LNG['ADMIN'] = '[Админ] ';
        LNG['MODERATOR'] = '[Модератор] ';
        LNG['STREAMER'] = '[Стример] ';
        LNG['VETERAN'] = '[Ветеран] ';
        LNG['YOUTUBER'] = '[Ютубер] ';
        LNG['CHANGE_ROOM'] = 'Перешли в комнату: ';
        LNG['ABOUT_SEND'] = 'Вы собираете отправить ';
        LNG['COINS_STEAMID'] = ' монет на Steam ID ';
        LNG['YOU_SURE'] = ' - вы уверены?';
        LNG['CHAT_CLEAR'] = 'Чат очищен!';
        LNG['YOU_SURE_BET'] = 'Вы уверены, что хотите поставить ';
        LNG['WARNING_BET'] = ' монет?<br><br><i>Вы можете выключить данное подтверждение в настройках.</i>';
        LNG['IGNORED'] = ' добавлен в игнор.';
        LNG['ROLL_NUMBER'] = 'Выпало число ';
        LNG['CONFIRM_TRADEOFFER'] = 'Подтверждение предложения обмена - пожалуйста подождите...';
        LNG['NEW_TRADEOFFER'] = 'Новое предложение обмена!';
        LNG['OFFER_SEND_TO_BOT'] = '<b>Обмен отправлен боту, ожидайте подтверждения обмена, примерное время ожидания ~';
        LNG['MINUTES'] = 'секунд.</b>';
        LNG['NEW_TRADEOFFER_FROM'] = '<b>Новое предложение обмена от';
        LNG['WITH_SECRETCODE'] = 'с секретным кодом';
        LNG['ON'] = 'за';
        LNG['COINS_PLEASE'] = 'монет. Пожалуйста, <a href=\'https://steamcommunity.com/tradeoffer/';
        LNG['CONFIRM_TRADEOFFER_PLEASE'] = '\' target=\'_blank\' >примите предложение обмена</a>.';
        LNG['CHECK_STATUS'] = 'Проверить статус';
        LNG['SUCCESS'] = 'Завершить';
        LNG['GET_COINS'] = 'Получить монеты';
        LNG['LOAD_ITEMS'] = 'Загрузка предметов - пожалуйста подождите...';
        LNG['BOT'] = 'Бот';
        LNG['LOADED'] = 'Загружено';
        LNG['ITEMS'] = 'доступных предметов';
        LNG['PROCESS_SEND_OFFER'] = 'Процесс отправки предложения обмена - пожалуйста подождите...';
        LNG['WAIT_BOT'] = 'Ожидание подтверждения от бота';
        LNG['MESSAGE_DELETE'] = 'сообщение удалено';
        LNG['FROM_CACHE'] = 'из кэша';
        LNG['FORCE_RELOAD'] = 'обновить инвентарь';
        LNG['FULL_LOAD'] = 'CSGO.mk сервера в данный момент переполнены - пожалуйста, попробуйте позже.';
        LNG['VERIFIED'] = 'Подлинный'
    } else {
        LNG['ROLL_TIME'] = 'Rolling in ';
        LNG['APPLY_BET'] = 'Confirming ';
        LNG['APPLY_TOTAL_BETS'] = ' total bets...';
        LNG['ROLL'] = '***ROLLING***';
        LNG['MIN_BET'] = 'Min bet: ';
        LNG['MAX_BET'] = ', max bet: ';
        LNG['BETS_PER_ROUND'] = ', max bets per roll: ';
        LNG['TIME_ROUND'] = ', roll countdown: ';
        LNG['CHAT'] = ', chat: ';
        LNG['SEC_COOLDOWN'] = ' sec cooldown (';
        LNG['AMOUNT_TOTALBETS_CHAT'] = '+ EN total bet)';
        LNG['COINS'] = ' coins';
        LNG['SEC'] = ' sec';
        LNG['BET'] = 'Bet #';
        LNG['CONFIRMED'] = ' confirmed ';
        LNG['GENERATE_TOKEN'] = 'Generating authentication token...';
        LNG['AUTHORIZATION_STEAM'] = 'Please sign in through Steam to connect.';
        LNG['SERVER_CONNECT'] = 'Connecting to server...';
        LNG['CONNECTED'] = 'Connected!';
        LNG['ERROR_CONNECTION_CLOSED'] = 'Error: Connection closed.';
        LNG['CONNECTION_ABORT'] = 'Connection lost...';
        LNG['ERROR_NO_TOKEN'] = 'Error: Failed to get AT';
        LNG['ALREADY_CONNECTED'] = 'Error: Existing connection found.';
        LNG['OWNER'] = '[Owner] ';
        LNG['ADMIN'] = '[Admin] ';
        LNG['MODERATOR'] = '[Moderator] ';
        LNG['STREAMER'] = '[Streamer] ';
        LNG['VETERAN'] = '[Veteran] ';
        LNG['YOUTUBER'] = '[Youtuber] ';
        LNG['CHANGE_ROOM'] = 'Switched to room: ';
        LNG['ABOUT_SEND'] = 'You are about to send ';
        LNG['COINS_STEAMID'] = ' coins to steamid ';
        LNG['YOU_SURE'] = ' - are you sure?';
        LNG['CHAT_CLEAR'] = 'Chat cleared!';
        LNG['YOU_SURE_BET'] = 'Are you sure you wish to bet ';
        LNG['WARNING_BET'] = ' coins?<br><br><i>You may disable this confirmation in the settings menu.</i>';
        LNG['IGNORED'] = ' has been added to ignored.';
        LNG['ROLL_NUMBER'] = 'Rolled ';
        LNG['CONFIRM_TRADEOFFER'] = 'Awaiting confirmation of the exchange - please wait...';
        LNG['NEW_TRADEOFFER'] = 'Your tradeoffer has been sent!';
        LNG['OFFER_SEND_TO_BOT'] = '<b>Exchange sent to the bot, awaiting for confirmation. approximate waiting time ~';
        LNG['MINUTES'] = 'seconds.</b>';
        LNG['NEW_TRADEOFFER_FROM'] = '<b>Your offer has been sent from';
        LNG['WITH_SECRETCODE'] = 'with secret code';
        LNG['ON'] = 'for';
        LNG['COINS_PLEASE'] = 'coins. Please, <a href=\'https://steamcommunity.com/tradeoffer/';
        LNG['CONFIRM_TRADEOFFER_PLEASE'] = '\' target=\'_blank\' >accept the exchange offer</a>.';
        LNG['CHECK_STATUS'] = 'Check Status';
        LNG['SUCCESS'] = 'Complete';
        LNG['GET_COINS'] = 'Get Coins';
        LNG['LOAD_ITEMS'] = 'Loading items - please wait ...';
        LNG['BOT'] = 'Bot';
        LNG['LOADED'] = 'Loaded';
        LNG['ITEMS'] = 'available items';
        LNG['PROCESS_SEND_OFFER'] = 'Sending a tradeoffer - please wait...';
        LNG['WAIT_BOT'] = 'Awaiting confirmation from the bot.';
        LNG['MESSAGE_DELETE'] = 'Message Deleted';
        LNG['FROM_CACHE'] = 'from cache';
        LNG['FORCE_RELOAD'] = 'force reload';
        LNG['FULL_LOAD'] = 'CSGO.mk servers are currently full - please try back later.';
        LNG['VERIFIED'] = 'Verified'
    }
});
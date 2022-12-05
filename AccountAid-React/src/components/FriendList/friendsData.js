/*
    DIFFERENCE BETWEEN MAP AND OBJECT IN JAVASCRIPT

    According to MDN:

    A Map object can iterate its elements in insertion order - a for..of loop will return an array of [key, value] for each iteration.

    and

    Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys, 
    and detect whether something is stored at a key. Because of this, Objects have been used as Maps historically; 
    however, there are important differences between Objects and Maps that make using a Map better.

    An Object has a prototype, so there are default keys in the map. However, this can be bypassed using map = Object.create(null).
    The keys of an Object are Strings, where they can be any value for a Map. 
    You can get the size of a Map easily while you have to manually keep track of size for an Object.
*/

const createFriendsMap = () => {
    const friendMap = new Map();
    friendMap.set('friend-id-1', { firstName: 'John', lastName: 'Doe', username: 'John-Doe69' })
    friendMap.set('friend-id-2', { firstName: 'Grant', lastName: 'Garboolza', username: 'Garboozloo22' })
    friendMap.set('friend-id-3', { firstName: 'Mike', lastName: 'Hunt', username: 'MikeHuntHurt3381' })
    friendMap.set('friend-id-4', { firstName: 'Jelly', lastName: 'Joe', username: 'JellyJolly825' })
    friendMap.set('friend-id-5', { firstName: 'Jaydn', lastName: 'Flores', username: 'pelicanjaydnflores' })
    friendMap.set('friend-id-6', { firstName: 'Cassie', lastName: 'Pollard', username: 'cassiecountry' })
    friendMap.set('friend-id-7', { firstName: 'Ayva', lastName: 'Guzman', username: 'AyGuzzy32' })
    friendMap.set('friend-id-8', { firstName: 'Pamela', lastName: 'Robins', username: 'Probins1987' })
    return friendMap
}

const createRequestsMap = () => {
    const friendMap = new Map();
    friendMap.set('request-id-1', { firstName: 'Rugby', lastName: 'Master', username: 'RugbyTheWrongWay' })
    friendMap.set('request-id-2', { firstName: 'Trash', lastName: 'Boat', username: 'TrashBoatMan' })
    friendMap.set('request-id-3', { firstName: 'Miller', lastName: 'Light', username: 'miller_official' })
    friendMap.set('request-id-4', { firstName: 'Wicket', lastName: 'Johnson', username: 'Get_Wicketed420' })
    return friendMap
}

const createPendingMap = () => {
    const friendMap = new Map();
    friendMap.set('pending-id-1', { firstName: 'Striker', lastName: 'Fast', username: 'Fastball1992' })
    friendMap.set('pending-id-2', { firstName: 'Joseph', lastName: 'Edwards', username: 'SoccerLover24' })
    friendMap.set('pending-id-3', { firstName: 'Oregan', lastName: 'Limonse', username: 'LimonseOG1' })
    friendMap.set('pending-id-4', { firstName: 'Kady', lastName: 'Reller', username: 'Kaderelle99' })
    return friendMap
}

export const FRIENDS_LIST = createFriendsMap()
export const FRIEND_REQUESTS = createRequestsMap()
export const PENDING_FRIENDS = createPendingMap()
export class FriendObject {
    constructor (firstName, lastName, username, id){
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.id = id;

    }
}
export const friendConverter = {
    sendFriendtoFireStore: (friend) => {
        return {
            firstName: friend.firstName,
            lastName: friend.lastName,
            username: friend.username,
            id: friend.id
        };
    },
    getFriendfromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new FriendObject(data.firstName, data.lastName, data.username, data.id)
    }
}
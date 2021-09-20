import UserModel from "../Models/UserModel";

export class UsersState {
    public users:UserModel[] = [];
};

export enum UsersActionType {
    UsersDownloaded= "UsersDownloaded",
    UserAdded = "UserAdded",
    UserUpdated = "UserUpdated",
    UserDeleted = "UserDeleted",
};

export interface UserAction {
    type: UsersActionType;
    payload?: any;
};

export function UsersDownloadedAction(users: UserModel[]): UserAction {
    return { type: UsersActionType.UsersDownloaded, payload: users };
};

export function UserAddedAction(user: UserModel): UserAction {
    return { type: UsersActionType.UserAdded, payload: user };
};
export function UserUpdatedAction(user: UserModel): UserAction {
    return { type: UsersActionType.UserUpdated, payload: user };
};
export function UserDeletedAction(id:number): UserAction {
    return { type: UsersActionType.UserDeleted, payload: id };
};

export function usersReducer(currentState: UsersState = new UsersState(),action:UserAction): UsersState{
    
    const newState = {...currentState}; 
    
    switch (action.type) {

        case UsersActionType.UsersDownloaded:
            newState.users = action.payload;
            break;
           
        case UsersActionType.UserAdded:
            newState.users.push(action.payload);
            break;

        case UsersActionType.UserUpdated:

            const idx = newState.users.findIndex(c => c.id === action.payload.id);
            newState.users[idx] = action.payload;
            break;
            
        case UsersActionType.UserDeleted:
            newState.users = newState.users.filter(c=>c.id !== action.payload);
            break;
    };

    return newState;
};
import  UserDTO  from './users.dto';
function mapUsersFromAPI(data: any): UserDTO[] {
    return data.map((user: any) => ({
        userId: user.userId,
      id: user.id,
      title: user.title,
      body: user.body,
    }));
  }

  export default mapUsersFromAPI;
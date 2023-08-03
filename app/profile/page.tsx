import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

const Profile = async () => {
    const session = await getServerSession(authOptions);

    console.log(session);
    
    return <div>fgfg</div>;
};

export default Profile;

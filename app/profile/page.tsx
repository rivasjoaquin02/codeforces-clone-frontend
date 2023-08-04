import User from "@/components/User/User";
import AcceptanceBar from "@/components/ui/AcceptanceBars/AcceptanceBar";
import StreakChart from "@/components/ui/Charts/Streak/StreakChart";
import SendedChart from "@/components/ui/Charts/Sended/SendedChart";
import UserInfo from "@/components/User/Info/UserInfo";

const Profile = async () => {
    const amountByCategory = {
        easy: 3,
        medium: 4,
        hard: 0,
    };

    const history = [
        {
            status: "accepted",
            date: new Date("2023-04-01"),
        },
        {
            status: "rejected",
            date: new Date("2023-04-02"),
        },
        {
            status: "pending",
            date: new Date("2023-04-03"),
        },
    ];

    return (
        <div className="profile-page">
            <UserInfo style={{ gridRow: "span 4" }} />
            <StreakChart />
            <AcceptanceBar amountByCategory={amountByCategory} />
            <User.Placeholder style={{ gridRow: "span 3" }} />
            <SendedChart history={history} />
        </div>
    );
};

export default Profile;

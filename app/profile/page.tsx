import AcceptanceBar from "@/components/ui/AcceptanceBars/AcceptanceBar";
import ActiveDaysChart from "@/components/ui/Charts/ActiveDays/ActiveDaysChart";
import SendedChart from "@/components/ui/Charts/Sended/SendedChart";
import UserInfo from "@/components/ui/UserInfo/UserInfo";

export type HistoryType = Array<{
    status: "accepted" | "rejected" | "pending";
    date: Date;
}>;

const Profile = async () => {
    const amountByCategory = {
        easy: 3,
        medium: 4,
        hard: 0,
    };

    const history: HistoryType = [
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
            <ActiveDaysChart />
            <AcceptanceBar amountByCategory={amountByCategory} />

            <div
                className="profile-placeholder glass border"
                style={{ gridRow: "span 3" }}
            >
                Placeholder
            </div>

            <SendedChart history={history} />
        </div>
    );
};

export default Profile;

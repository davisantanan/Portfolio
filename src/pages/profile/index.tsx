import ProfileCard from '../../components/profileCard';
import './styles.css'

function Profile(){
    return(
        <div className="content-container">
            <div id='profile' className="profile-container">
                <ProfileCard />
            </div>
        </div>
    )
}

export default Profile;
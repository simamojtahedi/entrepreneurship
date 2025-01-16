import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Account from '../Pages/account/userAccount/Account'
import EditProfile from '../Pages/account/userEditprofile/EditProfile'
import Messages from '../Pages/account/userMessages/Messages'
import Profile from '../Pages/account/userProfile/Profile'
import ForgetPassword from '../Pages/Auth/forget-password/ForgetPassword'
import Login from '../Pages/Auth/login/Login'
import Register from '../Pages/Auth/register/Register'
import CalendarPage from '../Pages/calendar/Calendar'
import Consultation from '../Pages/trainingAndConsulting/consultation/Consultation'
import ContactUs from '../Pages/contactUs/ContactUs'
import Courses from '../Pages/trainingAndConsulting/courses/Courses'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Forum from '../Pages//team/forum/Forum'
import ForumTopic from '../Pages/team/forumTopic/ForumTopic'
import NotFound from '../Pages/notFound/NotFound'
import Idea from '../Pages/trainingAndConsulting/idea'
import Introduction from '../Pages/guide/introduction/Introduction'
import Investment from '../Pages/trainingAndConsulting/investment'
import Invite from '../Pages/team/invite'
import Sieve from '../Pages/team/sieve/Sieve'
import Teams from '../Pages/team/teams/Teams'
import UserTicket from '../Pages/guide/user-ticket'
import VirtualOffice from '../Pages/virtualOffice/VirtualOffice'
import ScrollToTop from './ScrollToTop'
import Entrepreneurship from '../Pages/opportunities/entrepreneurship/Entrepreneurship'
import Innovation from '../Pages/opportunities/innovation/Innovation'
import Course from '../Pages/trainingAndConsulting/course/Course'
import Roadmap from '../Pages/guide/roadmap/Roadmap'
import Faq from '../Pages/guide/faq/Faq'
import CertificatesRequest from '../Pages/team/certificates/CertificatesRequest'
import TeachersList from '../Pages/guide/teachers-list'
import ConsultantsList from '../Pages/guide/consultants-list'
import UserProfile from '../Pages/guide/user-profile/UserProfile'
import Logout from '../Pages/Auth/logout/Logout'
import Library from '../Pages/trainingAndConsulting/library/Library'
import OperatorStatistics from '../Pages/operator/operatorStatistics/OperatorStatistics'
import OperatorSupport from '../Pages/operator/operatorSupport/OperatorSupport'
import ProviderManagement from '../Pages/management/providerManagement/ProviderManagement'
import CheckTeacher from '../Pages/management/checkTeacher/CheckTeacher'
import CheckConsultants from '../Pages/management/checkConsultants/CheckConsultants'
import checkVirtualServiceRequests from '../Pages/management/checkVirtualServiceRequests/checkVirtualServiceRequests'
import OperatorIdea from '../Pages/operator/operatorIdea/OperatorIdea'
import operatorInvestment from '../Pages/operator/operatorInvestment/operatorInvestment'
import AdminTicket from '../Pages/management/adminTicket/AdminTicket'
import AdminSettings from '../Pages/management/adminSettings/AdminSettings'
import AdminExportCenter from '../Pages/management/adminExportCenter/AdminExportCenter'
import Settings from '../Pages/management/settings/Settings'
import AdminEditusers from '../Pages/management/adminEditusers/AdminEditusers'
import AdminLib from '../Pages/management/adminLib/AdminLib'
import OperatorQuestions from '../Pages/operator/operatorQuestions/OperatorQuestions'
import OperatorConsultation from '../Pages/operator/operatorConsultation/OperatorConsultation'
import AdminMessages from '../Pages/management/adminMessages/AdminMessages'
import InpersonCourse from '../Pages/management/inpersonCourse/InpersonCourse'
import QuizCourse from '../Pages/management/quizCourse/QuizCourse'
import WebinarCourse from '../Pages/management/webinarCourse/WebinarCourse'
import OnlineCourse from '../Pages/management/onlineCourse/OnlineCourse'
import OperatorCertificates from '../Pages/operator/operatorCertificates/OperatorCertificates'
import AdminLog from '../Pages/management/adminLog/AdminLog'
import Operatorbbb from '../Pages/operator/operatorbbb/Operatorbbb'
import OperatorTours from '../Pages/operator/operatorTours/OperatorTours'
import OperatorShop from '../Pages/operator/operatorShop/OperatorShop'
import OperatorEditusers from '../Pages/operator/operatorEditusers/OperatorEditusers'
import EditUserPage from '../Pages/operator/operatorEditusers/editUserPage/EditUserPage'
import EvaluatorTeams from '../Pages/evaluator/evaluatorTeams/EvaluatorTeams'
import DemoQuiz from '../Pages/demoUser/demoQuiz/DemoQuiz'
import demoCertificates from '../Pages/demoUser/demoCertificates/DemoCertificates'
import AdminChallenges from '../Pages/management/adminChallenges/AdminChallenges'
import AdminOpportunities from '../Pages/management/adminOpportunities/AdminOpportunities'
import ChallengeOpportunity from '../Pages/management/challengeOpportunity/ChallengeOpportunity'
import OperatorDepartment from '../Pages/operator/operatorDepartment/OperatorDepartment'
import DemoDepartment from '../Pages/demoUser/demoDepartment/DemoDepartment'
import DemoEditusers from '../Pages/demoUser/demoEditusers/DemoEditusers'
import AdminForum from '../Pages/management/adminForum/AdminForum'

const Routes = () => {
    const user = JSON.parse(localStorage.getItem('user'))?.role

    return (
        <>
        <Router>
            <ScrollToTop>
                <Switch>
                    {/* ------ Auth routes ------ */}
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/register" component={Register} />
                    <Route path="/forget-password" component={ForgetPassword} />

                    {/* ------ Account routes ------ */}
                    <Route path="/account-info" component={Account} />
                    <Route path="/profile/:id" component={UserProfile} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/messages" component={Messages} />
                    <Route path="/edit-profile" component={EditProfile} />

                    {/* ------ Navbar routes ------ */}
                    <Route path="/virtual-office" component={VirtualOffice} />
                    <Route path="/calendar" component={CalendarPage} />
                    <Route path="/course/:id?" component={Course} />
                    <Route path="/courses" component={Courses} />
                    <Route path="/consultation" component={Consultation} />
                    <Route path="/forum" component={Forum} />
                    <Route path="/forum-topic" component={ForumTopic} />
                    <Route path="/contact-us" component={ContactUs} />

                    {/* ------ Guide routes ------ */}
                    <Route path="/user-ticket" component={UserTicket} />
                    <Route path="/roadmap" component={Roadmap} />
                    <Route path="/introduction" component={Introduction} />
                    <Route path="/teachers-list" component={TeachersList} />
                    <Route path="/consultants-list" component={ConsultantsList} />

                    {/* ------ TrainingAndConsulting routes ------ */}
                    <Route path="/investment" component={Investment} />
                    <Route path="/idea" component={Idea} />
                    <Route path="/library" component={Library} />

                    {/* ------ Team routes ------ */}
                    <Route path="/teams" component={Teams} />
                    <Route path="/invite" component={Invite} />
                    <Route path="/sieve" component={Sieve} />
                    <Route path="/certificates-request" component={CertificatesRequest} />


                    {/* ------ Opportunities routes ------ */}
                    <Route path="/entrepreneurship" component={Entrepreneurship} />
                    <Route path="/innovation" component={Innovation} />


                    {/* ------ Management routes ------ */}
                    <Route path="/admin-ticket" component={AdminTicket} />
                    <Route path="/admin-settings" component={AdminSettings} />
                    <Route path="/admin-export-center" component={AdminExportCenter} />
                    <Route path="/admin-lib" component={AdminLib} />
                    <Route path="/admin-messages" component={AdminMessages} />
                    <Route path="/inperson-course" component={InpersonCourse} />
                    <Route path="/quiz-course" component={QuizCourse} />
                    <Route path="/webinar-course" component={WebinarCourse} />
                    <Route path="/online-course" component={OnlineCourse} />
                    <Route path="/admin-log" component={AdminLog} />
                    <Route path="/admin-forum" component={AdminForum} />
                    

                    {/* ------ Operator routes ------ */}
                    <Route path="/operator-statistics" component={OperatorStatistics} />
                    <Route path="/operator-idea" component={OperatorIdea} />
                    <Route path="/operator-investment" component={operatorInvestment} />
                    <Route path="/operator-questions" component={OperatorQuestions} />
                    <Route path="/operator-consultation" component={OperatorConsultation} />
                    <Route path="/operator-certificates" component={OperatorCertificates} />
                    <Route path="/operator-bbb" component={Operatorbbb} />
                    <Route path="/operator-tours" component={OperatorTours} />
                    <Route path="/operator-shop" component={OperatorShop} />
                    <Route path="/operator-editusers" component={OperatorEditusers} />
                    <Route path="/operator-department" component={OperatorDepartment} />

                    <Route path="/edit-user/:id" component={EditUserPage} />


                    {/* ------ Demo routes ------ */}
                    <Route path="/demo-quiz" component={DemoQuiz} />
                    <Route path="/demo-certificates" component={demoCertificates} />
                    <Route path="/demo-department" component={DemoDepartment} />
                    <Route path="/demo-editusers" component={DemoEditusers} />

                                        

                    {/* ------ Challenge routes ------ */}
                    <Route path="/admin-challenges" component={AdminChallenges} />
                    <Route path="/admin-opportunities" component={AdminOpportunities} />
                    <Route path="/challenge-opportunity" component={ChallengeOpportunity} />
                    

                    {/* ------ Main routes ------ */}
                    <Route path="/404" component={NotFound} />
                    <Route path="/" exact component={Dashboard} />
                    <Redirect to='/404' />
                    
                </Switch>
            </ScrollToTop>
        </Router> 
        </>
    )
}

export default Routes

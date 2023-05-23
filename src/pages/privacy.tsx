import type { ReactNode } from "react"
import Institutional from "@/layouts/Institutional"
import HeadingPage from "@/components/atoms/HeadingPage"
import { NextPageWithLayout } from "./_app"

const PrivacyPage: NextPageWithLayout = () => (
  <>
    <HeadingPage>Privacy Policy</HeadingPage>
    <p>This Privacy Policy describes how the Yata app ("we," "our," or "Yata") collects, uses, and protects the personal information of users ("you" or "your") when using our mobile application. The privacy of our users is of utmost importance to us, and we are committed to protecting all provided personal information. By using the Yata app, you agree to the collection and use of your personal information as described in this policy.</p>

    <HeadingPage as="h2">1. Information Collection and Use</HeadingPage>
    <HeadingPage as="h3">1.1. Information provided by You</HeadingPage>
    <p>When you use the Yata app, we may request and collect certain personal information, such as your name, email address, and other contact information. This information is necessary to provide you with the services and features of the app.</p>

    <HeadingPage as="h3">1.2. Usage Informatioin</HeadingPage>
    <p>We may collect information about how you use the Yata app, such as the tasks you create, frequency of use, interactions with other app features, and aggregated usage data. This information is used to enhance the user experience and provide personalized features.</p>

    <HeadingPage as="h3">1.3. Device Information</HeadingPage>
    <p>When you use the Yata app, we may collect information about your device, including the model, operating system, unique device identifier, and other technical details. This information is used for analytical purposes and to ensure app compatibility across different devices.</p>

    <HeadingPage as="h2">2. Use of Information</HeadingPage>
    <HeadingPage as="h3">2.1 Service Provision and Improvement</HeadingPage>
    <p>The collected information is used to provide the services of the Yata app, such as task management, reminders, and related features. Additionally, we use this information to improve and optimize app performance, as well as develop new features and functionalities.</p>

    <HeadingPage as="h3">2.2 Communications</HeadingPage>
    <p>We may use the contact information provided by you to send app-related communications, such as updates, new features, notifications, and account information. You can opt out of receiving such communications by adjusting the app's notification settings.</p>

    <HeadingPage as="h3">2.3 Data Analysis</HeadingPage>
    <p>We may utilize the collected information for analytical purposes, such as evaluating app usage, monitoring trends, conducting market research, and gaining insights into usage patterns. These data are treated in an aggregated and anonymous manner, without identifying individual personal information.</p>

    <HeadingPage as="h2">3. Information Sharing</HeadingPage>
    <HeadingPage as="h3">3.1. Service Partners</HeadingPage>
    <p>We may share personal information with trusted service partners who assist us in providing the Yata app's services. These partners are subject to contractual obligations regarding the protection and confidentiality of personal information.</p>

    <HeadingPage as="h3">3.2. Legal Requirements</HeadingPage>
    <p>We reserve the right to disclose personal information when required by law, upon request by competent government authorities, to protect and defend our legal rights, or in cases of emergency to safeguard the personal safety of app users or the general public.</p>

    <HeadingPage as="h2">4. Data Security</HeadingPage>
    <p>We implement appropriate security measures to protect personal information against unauthorized access, misuse, alteration, or destruction. However, it is important to note that no method of data transmission or storage is entirely secure, and we cannot guarantee the absolute security of information.</p>

    <HeadingPage as="h2">5. External Links</HeadingPage>
    <p>The Yata app may contain links to third-party websites or services. This Privacy Policy does not apply to those sites or services, and we recommend that you review the privacy policies of those third parties before providing any personal information to them.</p>

    <HeadingPage as="h2">6. Changes to this Policy</HeadingPage>
    <p>We reserve the right to update or modify this Privacy Policy periodically, and any changes will be posted on this page. We recommend that you review this Policy regularly to stay informed of any updates or modifications.</p>

    <HeadingPage as="h2">7. Contact</HeadingPage>
    <p>If you have any questions or concerns regarding this Privacy Policy or the use of your personal information, please contact us at [insert Yata contact email].</p>

    <p>
      Effective Date: { new Date('2023-05-18').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }
    </p>
    <p>
      This Privacy Policy was last updated on: { new Date('2023-05-18').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }
    </p>

  </>
)

PrivacyPage.getLayout = function getLayout (page: ReactNode) {
  return (
    <Institutional>
      { page }
    </Institutional>
  )
}

export default PrivacyPage

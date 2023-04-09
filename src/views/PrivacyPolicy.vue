<template>
    <div class="inner">
        <Pagetitle/>
        <div class="section privacy py-100">
            <div class="container">
                <h2>Our Privacy Policy</h2>
                <p>How and why do we collect data and how do we use this information.</p>
                <h3>Who are we?</h3>
                <p>At Luvimac, we take your privacy seriously that you place your trust in us to handle your personal data responsibly. This privacy policy describes how we collect, use, and protect your personal information when you use the website and/or services of Luvimac.</p>
                <h3>What information do we collect?</h3>
                <p>We may collect the following personal information from you:</p>
                <ul>
                    <li>Name and contact information, such as email address, skype and phone number</li>
                    <li>Payment information that you provide us for uses of service, such as IBAN and other payment details</li>
                    <li>Demographic information, such as age, gender, Billing address. and location</li>
                    <li>Information about your computer or mobile device, such as your IP address and browser type</li>
                    <li>Usage information, such as the pages you visit on our website and the actions you take</li>
                </ul>
                <p>When you send e-mails or other messages to us, for example via the automated forms on the website, we save these messages. Sometimes we ask you for your personal details that are relevant to the situation in question. This makes it possible to process your questions and answer your requests. The data is stored on a secure server of a third party (with which a processing agreement has been concluded). We process personal data that you have provided to us yourself, personal data generated during your visit to our website and reading news items and personal data that we have derived from other sources.</p>
                <p>Please note that our website includes hyperlinks to third-party websites and social media buttons. We do not assume any responsibility for the content of those websites or the services provided by those social media platforms. Nor are we responsible for the privacy policy and the use of cookies on those websites and social media platforms. </p>
                <h3>How do we use your information?</h3>
                <p>We use your personal information to provide and improve our services, including:</p>
                <ul>
                    <li>To perform the agreement to which you are one of the parties;</li>
                    <li>Communicating with you about your account or our services</li>
                    <li>Personalizing your experience on our website</li>
                    <li>Analyzing how our website and services are used</li>
                    <li>Detecting and preventing fraud and other illegal activities</li>
                    <li>To send you information about our own products and services (marketing purposes);</li>
                    <li>To respond to questions and/or complaints you have;</li>
                    <li>To secure, adjust and improve the website;</li>
                    <li>To allow you to go through the application procedure.</li>
                </ul>
                <h3>How do we protect your information?</h3>
                <p>We use reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                <h3>Do we share your information?</h3>
                <p>We do not share personal information with companies, organizations and individuals outside of our agency. We may share your personal information with third-party service providers that assist us with our business operations, such as payment processors and third parthy application using to regieser your account. We may also share your information with government authorities or law enforcement officials if required by law.</p>
                <h3>Your rights and choices</h3>
                <p>You have the right to:</p>
                <ul>
                    <li>Access and request deletion of your personal information</li>
                    <li>Update your personal information</li>
                    <li>Opt-out of receiving promotional emails</li>
                </ul>
                <p>We totally get it. So if you have any questions regarding the above or have comments. Give us a call or email us. Email: info@luvimac.com</p>
                <h3>Policy changes</h3>
                <p>We may update this privacy policy from time to time. If we make significant changes,Luvimac reserves the right to change this privacy statement.</p>
                <h3>How long do we store your data?</h3>
                <p>The personal data you provided to us will be stored carefully and for no longer than is necessary for the purpose for which it was obtained. Unless Luvimac is required by law to keep your data longer, Luvimac applies the statutory retention periods.</p>
                <h3>Where are the personal data stored?</h3>
                <p>For the processing of your personal data, we can engage service providers ( processors ) who only process personal data on our behalf. We enter into a processing agreement with these processors that meets the requirements set by the General Data Protection Regulation (GDPR). Processors in the context of this article are, for example, Amazon Web Services, Google Gmail, Google Analytics, Google Calendar, Trello, Clickup and BitBucket, etc. </p>
                <h3>Terms of Service</h3>
                <p>Welcome to Luvimac. By accessing our website and using our services, you agree to the following terms of service:</p>
                <h4>Use of our services</h4>
                <p>You may use our services only for lawful purposes and in accordance with these terms of service. You agree not to use our services:</p>
                <ul>
                    <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                    <li>To engage in any activity that is harmful, fraudulent, or deceptive</li>
                    <li>To upload, transmit, or distribute any viruses, malware, or other malicious code</li>
                    <li>To interfere with or disrupt the operation of our website or services</li>
                    <li>To infringe on the intellectual property rights of others</li>
                </ul>
                <h4>Intellectual property rights</h4>
                <p>The content and materials on our website, including text, images, graphics, logos, and software, are the property of Luvimac or its licensors and are protected by copyright and other intellectual property laws. You may not use, copy, reproduce, modify, or distribute any content or materials without our prior written consent. While we have utilized images sourced from pexels, pixabay, and freepik, we would like to assure you that all of these images have been freely obtained and are free from any licensing restrictions.</p>
                <h4>Disclaimer of warranties</h4>
                <p>Our website and services are provided on an "as is" and "as available" basis, without any representations or warranties of any kind, express or implied. We do not guarantee that our website or services will be error-free, uninterrupted, or secure. We disclaim all warranties, including but not limited to the implied warranties of merchantability and fitness for a particular purpose.</p>
                <h4>Limitation of liability</h4>
                <p>In no event shall Luvimac be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our website or services.</p>
            </div>  
        </div>
    </div>
</template>
  
  
  <script>
  import Pagetitle from '../components/Pagetitle';
    export default {
      name: 'Privacy',
      components:{
        Pagetitle
      },
    }
  </script>

  <style lang="scss" scoped>
    .privacy{
      :is(p, li){
        font-size: 1rem;
        line-height: 28px;
        color: var(--p-color);
      }
      :is(h1, h2, h3, h4, h5, h6){
        font-weight: 700;
      }
      ul{
        li {
          position: relative;
          color: var(--p-color);
          padding: 0 0 10px 15px;
          &:after {
            content: "";
            position: absolute;
            left: 0;
            top: 10px;
            width: 6px;
            height: 6px;
            border-radius: 100px;
            background: currentColor;
          }
        }
      } 
    }
  </style>
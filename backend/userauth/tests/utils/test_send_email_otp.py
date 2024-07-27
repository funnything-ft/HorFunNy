from unittest.mock import patch

from django.core import mail
from django.test import TestCase, override_settings
from userauth.utils.send_email_otp import send_email_otp


class SendEmailOTPTest(TestCase):

    @override_settings(
        EMAIL_BACKEND='django.core.mail.backends.locmem.EmailBackend')
    def test_send_email_otp(self):
        email = 'ganwentao03@gmail.com'
        secret_key = 'JBSWY3DPEHPK3PXP'
        otp = '123456'

        with patch('pyotp.TOTP') as mock_totp:
            mock_totp.return_value.now.return_value = otp
            send_email_otp(email, secret_key)

        self.assertEqual(len(mail.outbox), 1)
        sent_email = mail.outbox[0]
        self.assertEqual(sent_email.subject, 'Your OTP Code')
        self.assertEqual(sent_email.to, [email])
        self.assertIn(f'Your OTP code is {otp}', sent_email.body)

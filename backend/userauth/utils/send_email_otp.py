import pyotp
from django.core.mail import send_mail


def send_email_otp(email, secret_key):
    otp = pyotp.TOTP(secret_key).now()
    send_mail(
        'Your OTP Code',
        f'Your OTP code is {otp}',
        'no-reply@horfunny.com',
        [email],
    )


def generate_secret_key():
    secret = pyotp.random_base32()
    return secret

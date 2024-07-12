from django.test import TransactionTestCase
from userauth.models import Profile, User


class TestProfile(TransactionTestCase):

    def setUp(self):
        self.user = User.objects.create(username='testuser',
                                        email='test@example.com',
                                        password='test12345')

    def test_get_upload_path(self):
        profile = Profile.objects.get(user=self.user)
        upload_path = profile.get_upload_path('profile_pic.jpg')
        expected_upload_path = f'{profile.name}.jpg'
        self.assertEqual(upload_path, expected_upload_path)

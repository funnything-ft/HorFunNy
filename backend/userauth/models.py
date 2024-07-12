from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import post_save


class User(AbstractUser):
    email = models.EmailField(unique=True)

    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.email


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, blank=True)
    desc = models.TextField(blank=True)

    FEMALE = 'F'
    MALE = 'M'
    UNKNOWN = 'U'
    gender_choices = [(FEMALE, 'Female'), (MALE, 'Male'), (UNKNOWN, 'Unknown')]
    gender = models.CharField(max_length=1,
                              choices=gender_choices,
                              default=UNKNOWN)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        name, mobile = self.user.email.split('@')
        if self.name == '':
            self.name = name
        super(Profile, self).save(*args, **kwargs)


def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)

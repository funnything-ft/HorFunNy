from django.db import models
from django.utils import timezone
from userauth.models import User


# Create your models here.
class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    caption = models.TextField(blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    image = models.ImageField(upload_to='posts/')

    def __str__(self):
        return f'{self.caption[:50]}'

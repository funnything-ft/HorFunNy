from django.contrib import admin
from django.contrib.sessions.models import Session

from .models import Profile, User


class SessionAdmin(admin.ModelAdmin):
    list_display = ('session_key', 'expire_date', 'get_username')
    ordering = ('expire_date', )

    def get_username(self, obj):
        data = obj.get_decoded()
        user_id = data.get('_auth_user_id')
        if user_id is not None:
            return User.objects.get(pk=user_id).username
        return None

    get_username.short_description = 'User'


admin.site.register(Session, SessionAdmin)
admin.site.register(Profile)
admin.site.register(User)

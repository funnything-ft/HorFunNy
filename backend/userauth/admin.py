from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.sessions.models import Session
from userauth.models import Profile


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

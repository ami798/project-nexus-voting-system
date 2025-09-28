from django.contrib import admin
from django.urls import path
from votes.views import cast_vote, results

urlpatterns = [
    path('admin/', admin.site.urls),
    path('vote/', cast_vote),
    path('results/', results),
]

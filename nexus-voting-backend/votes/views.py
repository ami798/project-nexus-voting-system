from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Candidate, Vote

@api_view(['POST'])
def cast_vote(request):
    candidate_id = request.data.get("candidate_id")
    try:
        candidate = Candidate.objects.get(id=candidate_id)
        Vote.objects.create(candidate=candidate)
        return Response({"message": "Vote cast successfully!"})
    except Candidate.DoesNotExist:
        return Response({"error": "Candidate not found"}, status=404)

@api_view(['GET'])
def results(request):
    data = []
    for candidate in Candidate.objects.all():
        count = Vote.objects.filter(candidate=candidate).count()
        data.append({"candidate": candidate.name, "votes": count})
    return Response(data)

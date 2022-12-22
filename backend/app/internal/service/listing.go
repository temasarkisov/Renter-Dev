package service

import (
	"renter/backend/app/internal/model"
	"renter/backend/app/internal/repository"
)

type ListingService struct {
	repo repository.Listing
}

func NewListingService(repo repository.Listing) *ListingService {
	return &ListingService{repo}
}

func (s *ListingService) GetListings(id int, name string, user_id int) ([]model.Listing, error) {
	return s.repo.GetListings(id, name, user_id)
}

func (s *ListingService) CreateListing(listing model.Listing) (int, error) {
	return s.repo.CreateListing(listing)
}

func (s *ListingService) UpdateListing(id int, name string) (int, error) {
	return s.repo.UpdateListing(id, name)
}

func (s *ListingService) DeleteListing(id int) (int, error) {
	return s.repo.DeleteListing(id)
}

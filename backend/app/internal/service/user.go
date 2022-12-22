package service

import (
	"renter/backend/app/internal/model"
	"renter/backend/app/internal/repository"
)

type UserService struct {
	repo repository.User
}

func NewUserService(repo repository.User) *UserService {
	return &UserService{repo}
}

func (s *UserService) GetAllUsers() ([]model.User, error) {
	return s.repo.GetAllUsers()
}

func (s *UserService) GetUserById(userId int) (model.User, error) {
	return s.repo.GetUserById(userId)
}

func (s *UserService) DeleteUser(userId int) (int, error) {
	return s.repo.DeleteUser(userId)
}

func (s *UserService) UpdateUser(userId int, input model.UpdateUserInput) (int, error) {
	input.Password = generatePasswordHash(input.Password)
	return s.repo.UpdateUser(userId, input)
}

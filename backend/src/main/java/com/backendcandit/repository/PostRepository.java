package com.backendcandit.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backendcandit.models.Post;

public interface PostRepository extends JpaRepository<Post, Long>{
	Optional<Post> findByTitle(String Title);

}

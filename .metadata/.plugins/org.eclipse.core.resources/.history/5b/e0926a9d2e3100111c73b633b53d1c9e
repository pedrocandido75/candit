package com.backendcandit.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backendcandit.models.Post;
import com.backendcandit.repository.PostRepository;

@Service
public class PostService {
	
	@Autowired
	private PostRepository postRepository;
	
	
	public Post createPost(Post Post) {
		return postRepository.save(Post);
	}
	
	public List<Post> getAllPosts(){
		return postRepository.findAll();
	}
	
	public Optional<Post> getPostById(Long id){
		return postRepository.findById(id);
	}
	
	public Optional<Post> getPostByTitle(String title){
		return postRepository.findByTitle(title);
	}
	
	public void deletePostById(Long id) {
		postRepository.deleteById(id);
	}
	

}

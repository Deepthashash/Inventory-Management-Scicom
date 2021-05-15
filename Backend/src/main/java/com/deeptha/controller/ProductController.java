package com.deeptha.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.deeptha.model.Product;
import com.deeptha.service.ProductService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/products")
public class ProductController {
	@Autowired
    private ProductService productService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Product> allProducts() {
        return productService.allProducts();
    }
    
    @GetMapping(path="/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public Product findById(@PathVariable int id) {
        return productService.findById(id);
    }
    
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Product addProduct(@RequestBody Product newProduct) {
    	return productService.addProduct(newProduct);
    }
    
    @DeleteMapping(path="/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public Product updateProduct(@PathVariable int id, @RequestBody Product updatedProduct) {
        return productService.updateProduct(id,updatedProduct);
    }
    
    @PutMapping(path="/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public Product removeProduct(@PathVariable int id) {
        return productService.removeProduct(id);
    }
}

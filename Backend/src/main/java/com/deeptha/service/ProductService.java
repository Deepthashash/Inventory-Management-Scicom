package com.deeptha.service;

import java.util.List;
import com.deeptha.model.Product;

public interface ProductService {
	
	List<Product> allProducts();
	
	Product findById(int id);
	
	Product addProduct(Product newProduct);
	
	Product updateProduct(int id, Product product);
	
	Product removeProduct(int id);

}

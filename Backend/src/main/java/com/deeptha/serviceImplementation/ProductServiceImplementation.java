package com.deeptha.serviceImplementation;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.deeptha.model.Product;
import com.deeptha.service.ProductService;

@Service
public class ProductServiceImplementation implements ProductService{

	private final static List<Product> products = new ArrayList<Product>();
	
	static {
		Product product1 = new Product(1,"Galaxy Note 10","6GB 256GB version","MobilePhone",150000,1000,100);
		Product product2 = new Product(2,"JBL Flip 02","High sound quality","Bluetooth Speakers",12000,50,100);
		Product product3 = new Product(3,"JBL Flip 05","High sound quality","Bluetooth Speakers",20000,70,100);
		
		products.add(product1);
		products.add(product2);
		products.add(product3);
	}
	
	@Override
	public List<Product> allProducts() {
		return products;
	}

	@Override
	public Product findById(int id) {
		Optional<Product> product = products.stream().filter(pro -> pro.getId() == id).findAny();
		if(product.isPresent()) {
			return product.get();
		}else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
	}

	@Override
	public Product addProduct(Product newProduct) {
		if(products.stream().anyMatch(pro -> (pro.getId() == newProduct.getId()) || pro.getProductName().equals(newProduct.getProductName()))) {
			throw new ResponseStatusException(HttpStatus.CONFLICT);
		}else {
			products.add(newProduct);
			return newProduct;
		}
	}

	@Override
	public Product updateProduct(int id, Product updatedProduct) {
		Optional<Product> product = products.stream().filter(pro -> pro.getId() == id).findAny();
		if(product.isPresent()) {
			Product tempProduct = product.get();
			System.out.println(updatedProduct.getDescription());
			tempProduct.setProductName(updatedProduct.getProductName());
			tempProduct.setDescription(updatedProduct.getDescription());
			tempProduct.setType(updatedProduct.getType());
			tempProduct.setPrice(updatedProduct.getPrice());
			tempProduct.setQuantity(updatedProduct.getQuantity());
			tempProduct.setReOrderLevel(updatedProduct.getReOrderLevel());
			
			return updatedProduct;
		}else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
	}

	@Override
	public Product removeProduct(int id) {
		Optional<Product> product = products.stream().filter(pro -> pro.getId() == id).findAny();
		if(product.isPresent()) {
			products.remove(product.get());
			return product.get();
		}else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND); 
		}
	}

}

package com.deeptha.model;

public class Product {
	private int id;
	private String productName;
	private String description;
	private String type;
	private int price;
	private int quantity;
	private int reOrderLevel;
	
	public Product(int id, String productName, String description, String type, int price, int quantity,int reOrderLevel) {
		this.id = id;
		this.productName = productName;
		this.description = description;
		this.type = type;
		this.price = price;
		this.quantity = quantity;
		this.reOrderLevel = reOrderLevel;
	}
	
	public Product() {
		
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getReOrderLevel() {
		return reOrderLevel;
	}

	public void setReOrderLevel(int reOrderLevel) {
		this.reOrderLevel = reOrderLevel;
	}	
		
}

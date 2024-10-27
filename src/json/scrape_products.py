import requests
from requests.auth import HTTPBasicAuth
from bs4 import BeautifulSoup
import json
url = 'https://deanaharlande.com/wp-json/wc/v3/products'
result = json.loads(requests.get(url,auth=HTTPBasicAuth('ck_177e715253e33cb9ee7c1ae9ec7cbbe86ba34892','cs_f989ac822b1cf00fb9671eda169fa0ed58a83895')).content)
productsWithVariations = []
for product in result:
    varUrl = 'https://deanaharlande.com/wp-json/wc/v3/products/'+str(product['id'])+'/variations'
    newProduct = product
    newProduct['variations'] = json.loads(requests.get(url,auth=HTTPBasicAuth('ck_177e715253e33cb9ee7c1ae9ec7cbbe86ba34892','cs_f989ac822b1cf00fb9671eda169fa0ed58a83895')).content)
    productsWithVariations += [newProduct]
# def extract_products(url):
#     # Send a request to the page
#     response = requests.get(url)
#     soup = BeautifulSoup(response.content, 'html.parser')
    
#     # Find all products within the <ul> tag with class 'products columns-3'
#     products = soup.select('ul.products.columns-3 li')

#     product_list = []

#     # Loop through each product
#     for product in products:
#         # Get the product name
#         print(product.findAll('div'))
#         name_tag = product.findAll('div')[1].find('h2').get_text().strip()
#         product_name = name_tag

#         # Get the image URL from the first <a> tag inside 'astra-shop-thumbnail-wrap'
#         image_tag = product.select_one('div.astra-shop-thumbnail-wrap a img')
#         image_url = image_tag['src'] if image_tag else None

#         # Get the product price from the <bdi> tag (only the plain text, without currency symbol)
#         price_tag = product.findAll('div')[1].find('bdi').get_text()
#         if price_tag:
#             product_price = float(price_tag.replace(',', '').replace('$',""))  # Remove commas if necessary
#         else:
#             product_price = None

#         # Add the product details to the list
#         product_list.append({
#             "productName": product_name,
#             "productDescription": None,
#             "productPrice": product_price,
#             "imageURL": image_url
#         })

#     return product_list


def save_products_to_json(products, filename='products.json'):
    # Save the product list to a JSON file
    with open(filename, 'w') as f:
        json.dump(products, f, indent=4)

save_products_to_json(productsWithVariations,input('filename:'))
# # Example usage:
# url = 'https://deanaharlande.com/product-category/fall-winter-collection-24/'  # Replace with your actual shop URL
# products = extract_products(url)

# # Save products to a JSON file
# save_products_to_json(products, 'products.json')

# print(f"Saved {len(products)} products to products.json")

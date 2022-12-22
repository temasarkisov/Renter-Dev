# id,name,login,password,role_id


from Cryptodome.Hash import SHA256
import csv


# with open('hosts.csv', newline='') as csvr:
#     with open('users.csv', 'w', newline='') as csvw:
#         reader = csv.reader(csvr, delimiter=',')

#         fieldnames = ['id', 'name', 'login', 'password', 'role_id']
#         writer = csv.DictWriter(csvw, fieldnames=fieldnames, delimiter=';')    
        
#         idx = 0
#         for row in reader:
#             if idx == 0:
#                 idx += 1
#                 continue
#             id = row[0]
#             name = row[1]
#             calculated_host_listings_count = row[2]
#             login = name.replace(' ', '_').lower()
#             login_bytes = bytes(login, 'utf-8')
#             password = SHA256.new(login_bytes).hexdigest()
#             role_id = '1'
            
#             data = {'id': id, 'name': name, 'login': login, 'password': password, 'role_id': role_id}
#             print(str(data))

#             writer.writerow(data)


# with open('listings.csv', newline='') as csvr:
#     with open('listings_detailed.csv', 'w', newline='') as csvw:
#         reader = csv.reader(csvr, delimiter=';')

#         fieldnames = ['id', 'description', 'neighbourhood', 'apart_type_id', 'price', 'minimum_nights']
#         writer = csv.DictWriter(csvw, fieldnames=fieldnames, delimiter=';')    

#         idx = 0
#         for row in reader:
#             if idx == 0:
#                 idx += 1
#                 continue
            
#             id = row[0]
#             name = row[1]
#             user_id = row[2]
#             neighbourhood = row[3]
#             apart_type_id = row[4]
#             price = row[5]
#             minimum_nights = row[6]
            
#             data = {'id': id, 'description': f'Perfect apartments next to {neighbourhood}.', 'neighbourhood': neighbourhood, 'apart_type_id': apart_type_id, 'price': price, 'minimum_nights': minimum_nights}
#             print(str(data))

#             writer.writerow(data)


# with open('listings.csv', newline='') as csvr:
#     with open('listings_images.csv', 'w', newline='') as csvw:
#         reader = csv.reader(csvr, delimiter=';')

#         fieldnames = ['id', 'listing_id', 'image_path']
#         writer = csv.DictWriter(csvw, fieldnames=fieldnames, delimiter=';')    

#         idx = 0
#         for row in reader:
#             if idx == 0:
#                 idx += 1
#                 continue
            
#             idx += 1
#             id = idx
#             listing_id = row[0]
#             name = row[1]
#             user_id = row[2]
#             neighbourhood = row[3]
#             apart_type_id = row[4]
#             price = row[5]
#             minimum_nights = row[6]
            
#             data = {'id': id, 'listing_id': listing_id, 'image_path': ''}
#             print(str(data))

#             writer.writerow(data)



with open('listings.csv', newline='') as csvr:
    with open('listingsnew.csv', 'w', newline='') as csvw:
        reader = csv.reader(csvr, delimiter=';')

        fieldnames = ['id', 'name', 'user_id']
        writer = csv.DictWriter(csvw, fieldnames=fieldnames, delimiter=';')    

        idx = 0
        for row in reader:
            if idx == 0:
                idx += 1
                continue
            
            id = row[0]
            name = row[1]
            user_id = row[2]
            neighbourhood = row[3]
            apart_type_id = row[4]
            price = row[5]
            minimum_nights = row[6]
            
            data = {'id': id, 'name': name, 'user_id': user_id}
            print(str(data))

            writer.writerow(data)

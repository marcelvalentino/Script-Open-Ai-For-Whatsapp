import whois
import sys

# Masukkan domain yang ingin Anda periksa
domain = sys.argv[1]

# Lakukan pencarian whois untuk domain
whois_info = whois.whois(domain)

# Cetak informasi whois yang lebih lengkap
print("Informasi Whois untuk domain:", domain)
print("====================================")
print("Nama Domain:", whois_info.domain_name)

# Mengecek jika ada lebih dari satu nama domain terdaftar
if isinstance(whois_info.domain_name, list):
    for name in whois_info.domain_name:
        print("Nama Domain:", name)
else:
    print("Nama Domain:", whois_info.domain_name)

print("Pemilik:", whois_info.registrant_name)
print("Email Pemilik:", whois_info.registrant_email)
print("Tanggal Pembuatan:", whois_info.creation_date)
print("Tanggal Kadaluarsa:", whois_info.expiration_date)
print("Server WHOIS:", whois_info.whois_server)

# Informasi tambahan yang mungkin tersedia
print("====================================")
print("Informasi Tambahan:")
print("Organisasi Pemilik:", whois_info.registrant_org)
print("Alamat Pemilik:", whois_info.registrant_address)
print("Kota Pemilik:", whois_info.registrant_city)
print("Provinsi Pemilik:", whois_info.registrant_state)
print("Kode Pos Pemilik:", whois_info.registrant_zip)

# Menampilkan seluruh informasi whois
print("====================================")
print("Seluruh Informasi Whois:")
print(whois_info)

. ./scripts/configs.ps1

# upload /configs to remote
scp -r -i $pem_key_loc $source_configs_path $target_user@${target_ip}:$target_src_path

# upload /public_data/assets to remote
scp -r -i $pem_key_loc $source_public_data_assets_path $target_user@${target_ip}:$target_public_data_path

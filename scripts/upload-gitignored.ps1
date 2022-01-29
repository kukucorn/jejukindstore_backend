. ./scripts/configs.ps1

scp -r -i $pem_key_loc $source_configs_path $target_user@${target_ip}:$target_src_path
scp -r -i $pem_key_loc $source_public_data_assets_path $target_user@${target_ip}:$target_public_data_path

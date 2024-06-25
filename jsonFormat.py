import os
import json

def get_files_in_directory(root_dir):
    image_extensions = ['.jpg', '.jpeg', '.png', '.gif']
    video_extensions = ['.mp4', '.avi', '.mov']
    file_paths = []

    for root, dirs, files in os.walk(root_dir):
        for file in files:
            try:
                file_path = os.path.join(root, file)
                ext = os.path.splitext(file_path)[1].lower()

                if ext in image_extensions or ext in video_extensions:
                    # Construct the relative file path
                    rel_file_path = os.path.relpath(file_path, root_dir).replace("\\", "/")
                    file_paths.append(rel_file_path)
            except UnicodeEncodeError:
                print(f"UnicodeEncodeError: Unable to process file '{file}' in directory '{root}'")

    return file_paths

def write_paths_to_json(file_paths_dict, output_json_file):
    with open(output_json_file, 'w', encoding='utf-8') as json_file:
        json.dump(file_paths_dict, json_file, ensure_ascii=False, indent=4)

# Example usage:
directory_path = 'C:/Users/thoma/Desktop/homescreen stuf/react/sparxDatabase/public/images'
output_json_file = 'C:/Users/thoma/Desktop/homescreen stuf/react/sparxDatabase/public/filePaths.json'

file_paths_dict = get_files_in_directory(directory_path)

write_paths_to_json(file_paths_dict, output_json_file)

print(f"File paths dictionary saved to {output_json_file}")

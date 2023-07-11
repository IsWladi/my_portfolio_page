def create_projects(data, static_url):
   projectsHtml = []
   for key, value in data["projects"].items():
       if key == "message" or key == "description":
           continue
       src = f"{static_url}images/projects/{key}.png"
       title = key.capitalize()
       description = data["projects"][key]["description"]
       github = data["projects"][key]["github"]
       create_structure = f"""
            <div class="col-12 col-md-6 col-lg-4">
              <div class="proyecto">
                <img src="{src}" alt="Project {key}" />
                <div class="overlay">
                  <p>{title}</p>
                  <div class="iconos-contenedor">
                    <a href="{github}" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-github"></i>
                    </a>
                    <div class="text-wrap">{description}</div>
                  </div>
                </div>
              </div>
            </div>
       """
       projectsHtml.append(create_structure)
   return projectsHtml

def create_stacks(data, static_url):
    """
    Create the html code for the stack section and be able to display it on the page
    """
    # charge in this variable the full html code of the stack
    stacksHtml = []

    for key, value in data["stack"].items():
        if key == "message" or key == "description":
            continue
        else:
            src = f"{static_url}images/stack/{key}.svg"
            data_title = key.capitalize()
            alt = data["stack"][key]["desc"]
            full_stars = len(data["stack"][key]["stars_full"])
            half_stars = len(data["stack"][key]["stars_half"])
            stars = ""
            for i in range(full_stars):
                star = f"""
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>

                """
                stars += star
            for i in range(half_stars):
                half_star = f"""
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
                <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
                </svg>
                """
                stars += half_star



            create_structure = f"""
            <div class="image-container">
            <img class="stack-img img-fluid" src="{src}" data-title="{data_title}" alt="{alt}"></img>
            <div class="stars-container">
                {stars}
            </div>
            </div>
            """
            stacksHtml.append(create_structure)

    return stacksHtml

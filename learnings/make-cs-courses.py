# <tr>
#     <td>Intro to Operating Systems</td>
#     <td><a href="http://courses.cs.washington.edu/courses/cse451/" target="_blank">CSE 461</a></td>
#     <td>Winter 2020</td>
# </tr>

import json

cs_courses = json.load(open('cs-courses.json', 'r'))

def printRows(courses):
    res = []
    for course in cs_courses:
        res.append("<tr>\n")
        table_data = "    <td> {} </td>\n    <td><a href='{}' target='_blank'>{}</a></td>\n    <td>{}</td>\n"
        res.append(table_data.format(course["name"], course["url"], course["courseId"], course["quarter"]))
        res.append("</tr>\n")
    return ''.join(res)

f = open("./cs-courses.html", 'w')
f.write(printRows(cs_courses))
f.close()

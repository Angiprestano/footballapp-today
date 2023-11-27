import { Card, Button } from "react-bootstrap";

const SerieD = () => {
  return (
    <>
      <h4 className="ms-4 mt-4 fst-italic ">Serie D</h4>
      <div className="d-flex ms-3 mt-2">
        <Card style={{ width: "15rem" }}>
          <Card.Img
            variant="top"
            src="data:image/jpeg;base64,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"
          />
          <Card.Body>
            <Card.Title>Maglia Messina 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary" className="p-1">
              Acquista
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQERASEhIQEBUVGBUQEhUVEBAQEBUVFRgYFxURFRUYHSggGBolHRUVIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lICUuLy0tLS8vLS0tLS0tLTAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOgA2gMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUDBgcCCAH/xABIEAABAgMDBgsFBgMHBQEAAAABAAIDBBEFEiEGMVFxcrEHEyIjM0FhgZGywSQyNFKhQmKCg5LCFNHhFUNjc6Kz8BclU9LxFv/EABoBAQADAQEBAAAAAAAAAAAAAAADBAUCAQb/xAA8EQACAQIBCAgEBQMEAwAAAAAAAQIDETEEEiFBUXGRsQUyM3KBobLBQmHR8BMiYqKzI1LCNIKS4RQ1Q//aAAwDAQACEQMRAD8A7iiIgCIiAIiIAiIgCIiAIq217YhSrC+I5rQBUkmgC1WFwp2e40EZnfVu9Ab4i1SFl9JOzRof62rP/wDtJP8A8rP1BAbIi1eJlzJN/vYf62qumOE6QZ/fQ+41P0QG8otdyfytlp0VgxGu6jTONYK2JAEREAREQBERAEREAREQBERAEREARF4iRA0VJogPa8kgLWrZyylpfAvBd1CuJ1Bc7nuE2JMl7YALAMKuwOPWB3LxyS0slpUZ1GlFY+2J1qdtiDCBLngd60u2+E6Whu4uG6885gMequJ6sy5pNzkSMaxHudrJp4KhiN9th6v2qFVr3stRfl0b+Hmucr3lFWXze0y5WZXR7QfR5uwwcGA1roJVWLOacziO6q/IMIGFME/ZLCO8keq8S8xTA9xUkrvqlalGnG34i0SV18tLXsZv7FPVEb+khP7Ed8zPqp0rNhpqQHDQc2tShaDP/G3Tnr3YhQ589vkXv/Gyb+3zf1KkWIfnb4FejZAGeJ4MU2LMgkkC72VqO5Qpia0YleqVRnNSlktNXa839T1ZdpxJGNfguIpnHU7sK69YHCmykJsxyHPaHDOWmvVVcabLgwYkQ4m81vqVLjM5Ulss3qRyto38ipGipJtq181rc5ZvI+l7Nykl44F17fFW7IgdmIK+dWOLDVpcDpBIKu5PLmYlG3nkxGimH2sTTvXMK6loJ8o6LqUk5RaaXg/p5nckWj2BwhS8wGXjcLswdySdWlbjLTTIgq0gqZO5mtNaGZ0REPAiIgCIiAIiIAiIgI85MiG0uPUuH5ecJER73wZY0AJa5+cV0DSVtXC1lKYUF0OHUuIoSATdBwvHQFwhgwKAs5qYJiy8wSTeAvEmuIN1+9ZZFtyajQ9NSPMPoSoZ5UsR8jwe54pvAUh0T2iWf8zW114tKgktDW9e6NSjU0qX6oy4rMl52LwKoiD26HqHlcrp3YqiI326Hq/aVBT17ma2Wf8Az78OZWy3Qzf5fmKs5CTZEgQ7wrgaHMRyz1qvlW8zN/l+Yq5sdvMQu/zuU1V2w2+xnZBFSlGMldZj9bKa0bO4kBweSCaUpjmJ9FiMGIHQ2VFXAObqOZW+UQ5lu0Nzlge32mU2IaRm3FN/PyPK+SwjVcYXSvDBv4nZ/wDREkpJ0Vzml1LufCvXTDwV3K2ZDh1IF40OJ1dWhRLDHPTOs+Yq4eOSdR3KOrOV7atHItZBk1L8P8Rq8ry0vTg2jV4PwkTbbuUqMOVJbLN4UeCPZIm23cpUYcuR2Wb1NLrPe+Rn0uzj3af8hsAVTlI/m2N63Gvh/UhW5CqLQ5czAYeqh+tT9AFWpda+zSbPSF/wHFfE1Hi/oeJuBemJeD1MDa7z9AFcZPZdxpWKakuhXjQdbRXCmlULI1Yk1F0NcBrcbg+lVWK3TWj73vmYOV1FKTa1yb8F+WPJn1Rk9bLJuE17CDUAq2XBOCjKMwIvEPPJdiz1C7vCiBwBHWpCkZEREAREQBERAFW27aDYEJzyaUBViTRca4YsqS27Ahu5RNTmNANIOGObxQEOfmXHjY73OYXh1H9NALaGkGMzOw58dJz9S5UHLYoOUTjCcwFsB1HNODnQnsINWEVN044dQoAKdes1UFGMk5OWLO5tO1ifJuqIrfmYT3tId6Feoj+ZgO+Rz2/UOCwWaedYNNW+II9V7Yayzhoe0+LSPRSPHh9Cem703ul5Zs/qbeOtVET46HqHlcrGSiXobDpa3cv2ybMMeevFpcyG1pfRzWGrmkNFT35tCpxds6+xm/ls/wAlOf64vm/Y16UHMzf5fmKubH6CF3+dy2KYyVhmDHbCl4kN7wLpMzDeLwNRhewH81Q2UwtgwwRQi8CNBDnAhdSqRnF22+xS6O7VLZBr99/ci5R9E3aG5yjxB7TK7EP1UnKPoW7Q3OUaL8TK7EP1XcOovHkSZR2730/Uz3YnTTOs+Yq5cOS7UVS2J00zrPmKv4EK+QytLxDK9QvYV+qjqdbhyRZyB2oXe2XqZrtlyMSNLOawCrojQLzgwHCmBOdZp6Wex8leGYMZUYtLmuxAcMCuqyllwZOVqQw0cQXMLXmHBYHXevHMCc2Lktmw2TEBjhxbHNL2kPcGXmsJdDiACvKvAEdjiFaa0vxfFHz9PKGkk8LRWvCMs40ZUsN/tcV+cMa46rrQP5q7Bx71rcrE5M4/SAP1OKq0ldPhxZ9Bl0lGVO+puX/GLZHa6kB333gdzBXeVCLlmmDSHAG2fE0HlUVzsFdR81U1LYlyvzZvuR0rD/hzFLITHXnMMeKb5GajYMIGpfjnw78y7BkZahiQ7j7wc3CjgWup1GhxFRQrjOS022WlTFc6FDLnvuvPKigAAFjAQbpqK5j1KxyRyxuzjRyrrqNvvdWI80GLxmBJvZtIHUq9Ny/Els+/vZ8kHbNR31Fhlowe0OHWsyskYREQBEXlzqCqAp8qbVbLQHvJpQEr5ht20XTMZ8VxPKOHYOoLo3DHlEXuEuwmhxdooOpcqeUB+PWMr25Y3ID3LxKOadBG9SYOLZoaCP8AS6nqq9xpip1nuqZnta531BXEsPvaixk6znm7b+cWjZ7HfWDD1U8MFfS8xLQogYHSr3nGr2F0St3AV6m4LV8nncyOwuH1WOI726Hq/aqcoZ0pJ/M2qjz6FF7XBcfobdL2vKlkU3ZKgAJPEgY40a5la5x9VCiva+j2cSGkuuiEeRQOIDrvVXPTTVanJ9DN/l+Yq7sboYXf53L2dJQ0rb7EPR2mpH5wb/fb2I+UfRN2huco8X4mV2IfqpGUnRN2huco0T4mU2IfqpIdRePIkynt3vp+pnuxOmmdZ8xVxGYCxwPWCPoqawummdZ8xV5EGB1Hco6nW4ckWcgV6HjL1MwZLWkIcF3GBzmRL8KIaFxo4FufSKhesqp0zL4LgCxrzcGBbVrqYEV0UWuQR7K8/fYO6ikxDR0lssOfrqFYeNvm+RkwUXFNrGEFjtko8kbHHdQE6AT9FqbDSUjnrLmAd1CtjtN1IUQ/dctWimklrefoP6KGjh4ov9Iv8+6E3xsjBNRaiHsN+pLvVRx1LwX1p2Bo8AF7h51bWBgTd5NmcKUILm0eC0EAPpe5YFQA6muniFEbnVtCicVFfFIa9goWA+4+tLje27gadVyi9ODuXBllB/ES7A7BwFPDCo7Fvi+cclMqHw55ri4mG+jQ0Vus6wB3kr6GkpgRGNcOsICQiIgCqcpJ3iYD3aAVbKiyus90xLvY3OQaIFa+k4HbDYkR8SIeeDzVzDnHaw9RWuRpKoLoRMQDO0ikRutvXrC3GcgPhOLHgtIzg9XaFWzEm1/Kxa4ZnN95VI1WnZn0NbIadSKcNK1aeT08Ho3M1Irw7MtgnpY/3rL/APiQxR/4mZiqh8kTUwyIo7MHDW0qwppmPUyWcHbH5a+Hurr5kEqbZYoYg0sfuBULi3FwaGkuOAFMSVYWdBeyMWPaWuulpB2F7Pqs5yZ2rR3otcn3cydo+i/HfHQx2Dyr3k50Tux3os9nSL5i0oMOGAXEVFTQYMJOKr/HLczXUksloSb+KHkyBIjmJv8AL8xVzY3Qwu/zuUIWdFhCcgPaWRA+FDLThi59BjoNRjoK2iyslZoO/hi1nGw2l7xfF2hNRR3X7wXtVNrRt9iPIJRhKMpOyVN/yM13KPoW7Q3FRYvxEpsQ/VblbPB/PxWBrGQiQ4HGKBhQ/wA1gicHtocbAfchUY1odzorUVr1dqRjJRtbae18opOs2pK16fk9PDWavYfTTOs+Yq8eMDqO5V9nWbEhTM1DN1xaaOLHXmAkk3b2ao6wrSYhFrTUUwPUdCiq9fhyLXR+UUnTVPOWdeTtdXxbwxNShD2R+23cpEb35HZZvWSRsyM+Ve0MPKc17am7UUGIqvM/DLHyQcCC0MBBzgh2IU7aznvfIyqE4SglFp2jBP5P8Qn2u+kGKOyniVQzRpKQRpLzv/mrvKA8zE/D5wqO0geIlxnqHkd64o4Lf7F3pF/1J9znNFXSlFkhrzMS8SGaRGlhPKFesdlFKl5F5FTRjfmcbo/qrLaWJixhKbtFXPMJTJWSc8Fxoxgzudg3u0nUpdnSjfsNMc/M8XIQ1D7St4UiK3oh414zdTG7LcwUUqqX39+ZeyfIJVNLw8uOvdG+9EaQlCRSGDCb9qKRzrxoaPshdt4OrSMSDccalvJ/kVytg0LpvB1ZUSE1z3i7eNQOunauaM3KT2ff37FjpChTpUYq/wCa+jVo12WpYfPa2zekRFYMYL8IX6iA1vKLJWFNNOAa7qIzrldu5Mx5UmrS5ukDeu8LBMyrIgo4AridNSxLOTZXUoP8r0bNR82R3dyqZqXY7GlDpGdd5trg+gRqlounswWuQuCnli9EddriMFCqUovQaUukKFWNpq3ytfh9plRwVZJca4x4tXjMy8BgP6qq4SbKbL2lBIFGvY5vZVtf/YLutjWWyWhtYwAACi5jw3yoAl4vW2K0dzgQfRTtWi0ZcJ3rxk9q5nMMnnc28do3FbBkIP8AvMDZf/tFa3k77kTWNy2bIcUtiX2H/wC0VDHtmaFX/wBdDw9zaYsSHbHHhjWQ5yVjXHdQjQYUc3TXTRp1HsKz286XE/G/iHxmNuMumFg69QYHspVUcDJK1YMxOR4DGte+MYsE8bDxBiudRwrmLXYg6VfyUla4iGYiQpfjntuPxYWUBwoL2GAHWuqiusNfsQ5JOMXdz+B60rPPwvZ78NZp2XcxBbCh/wALFmTyuXfc4HMbtKU7VZ29Hf8A2dYpDngmI6pDnVODs561NyysW1J2C1joUuAx/GVD4cOlGuBJJdmxWsTUxMxokhINayM2DR7OKHGG868HEvBoW9ubtXiVo236rHcpqVRSunZw052dreuyWi/gj3Z9BB5PW95eRWt6prVTLzrhzHRUHRm1LLYuRVownxS6G0NcS4DjWEVJONK4GlFazGSU85p5tuY0HGMpvUE6Us7QmeZK45qhJ083PcrtvOxeCVtOyV7WeBpE/Hmbjr4MN99lwMLiKUPu0z41X7lACY8pepeuQ72u9ithkclbXZBLeLhuiAgNvRYbuTTTVUmU1mR5aYkmzIAiOaxxo5rq8uh93tUyi08NvIo0YOTpt5qzVFWTxvLZqtrWkiZQO5l2tu9fljSvHzFmwqVwvu1Z/RMpBSE7aCu+CyWESeaT9iFDA/FivKOC3vkavSUrTmtqiv3N+xvmXWR7YkqHQxde0VBAFVyGBJtBq6r3DDlEmh1L6kjQA9l05qUXObY4NREiufDcWhxqR1a1JUg31SnkdenTdqq0Y7dO7DyOcS7hmz7la2dZsWYcGw2k7hrK3yyeDeGwgxCXeFFuln2TCgABjQO5Rxoa5Mu1ulklaktO1/T68DVsmcimQqPi8p2fsGpbrChhooBRe0VhJJWRjTnKcnKTuwiIvTkIiIAiIgCIiALkvDw7mIQ/xWbiutLjHDzGqZVmmJXwaf5rxnUcUc2ycHJftDcVJvUn4OJbmxFagXDXMsGTI5D9r0K9xfjoer9rlWfXlufI3If6Wh348ywkIsEw5kmcmgL0AEUiXg0xCHuDqnEDHN4q2smKzioftUYg3sSIlfeOfHUM2cHqoVpsh0M3+X5ir2yDzELv87l7Wwe/2I+jo3nHT8D9bM2VMVhljz8UuvN5Dr9x9Ri3rzVdnwN3VXDCEFs1BpMxGC5BDS1sQXwb16oGjQdOc0oYmUZ5lu0NzlHefaZXYh+qQf5F48jvKI2rtX109n9xeWHGgl8wf4uZvXhyDxmAIrW9iMHlzdTa9atnxW0+JigYjExLwHL5RoKUwZmqeUcMFp9idNM6z5irqIeSdR3KOq/zcORZyCF6OLxls/ufyK6HGh/wsYiamK1aRV0Um9xbCWVp85eNFADXT+Wy9piydyJEituto59b3vkA46QAe9VEE+yv/wAxu5TZn3pHZh7wp3i975GVSX9OPdh/ITMpxzR1tV9wOO9tf/lwtyospRWA7W0qw4LIt20WD5oLD4Xf6ryh1fv5E3SvavdH/I+jwv1eWHAL0pzICIiAIiIAiIgCIiAIiIAiIgC4Zw5O9olfzD9Grua4Vw3urNSo7Ix8GheSwJKXXjvRpGTXRu2juR59uh6v2lfuTnQuP3juC8PPtsPV+1Vn15eJtx/01DvQ5kWQ6Gb/AC/MVeWR0ELv87lQyPQzf5fmKv7H6CF3+dy9rYPf7HHRvaR7kv5GRMpehbtDc5R3/EyuxD9Vnyk6Fu0NzlHcfaZXYh+q8h1F48jvKe3e+n6jJYfTTOs+Yq4iHA6juVLYh56Z1nzFXEY4HUdyjq9bhyRayDsPGXqZrUD4WJtt3KbGzyOyzeoMA+yv227lOie9JbLN4ViXWe98jJpdnHu0/wCQm5QHmXaxvWfg/NLRlv8AKp9Vgt7oIvYWn/WFlyENJ+TOmG4f6iuKOC3vkT9Jr+pLur1M+l4XujUsixwPdbqWRWTFCIiAIiIAiIgCIiAIiIAiIgC4Dw0v9thdkKMdy76V888MMW9P0+WC8/qdT0XMsCWj2iNbsAUgfiKxRfjIeoeUrPYg5hut29R43xsPUPIq3xy8Tbwyeh3qZFkjzM1+X5ir6xzzELv87lQSXQzX5fmKvbJPMQu/zuXVbB7/AGIuje0j3H/IyNlGeabtDcVGifEyuyz1WfKLoxtDcVHefaJbZZ6ryHV48iTKe3e+n6jJYp56Y1nzFW0U59R3KnsfpZjWd5VrEOB1HcuKvW4ckWcg7Dxl6ma9C+Fftt3KaTy5LZh7woUH4WJtt3KVFPLkdlm9TvF73yMmn2ce7D+Qs7a6KJ3bwvGRrqTln/jbvWW2Oji6lDyWfdmbOP34jfGq4o4ePsWuk1/Ul3P80fUkt7jdSyqPIGsNmpSFZMMIiIAiIgCIiAIiIAiIgCIiA8uzFfOHCrFvWjMfdgtH6nlfRz8x1L5o4TH1npzsbCb9SV48CSk7Sv8AJ+lkOxxzLO8/UqHE+NZ/z7JU+zRSFD2d6gO+Mh/8+yqi60vE36itSor9VP2Ikn0M1+X5irqyTzMLv87lRyx5ma/L8xV1Y/Qs7/OV3Wwe/wBiv0d149x/yMw5Q9E3aG4qM/4iW2WeqkZRdENobioz/iJbZZ6ryHV4neU9u99P1HuxzzsxrO8qzinA6juVXY/Sx9Z8xVlGzHUVxV63DkWch7Dxl6mUcH4V+23cpEb3pLZh7wo0A+yxNtu5SZj3pLZh71O8XvfIyqfZx7sPWXFpYsi7JVbYT7r5F2iPd/V/9VjN4hw0tePoqeyn4S50TEP0UdHDxXIu9Iq8/wDZLycWfVdlurCZqUtV9iGsBmoKwVowAiIgCIiAIiIAiIgCIiAIiIDFMuoxx7F8s5ax781Pu/xWMH4GU3r6dtmLdgvPYV8nT8bjBFf88aI/xx/cvHqJKa6z/S/NW9y9lcIbB90blAcPbIer9qsoYwA7Aq2P8ZD1DyqnDF7mfR5UrRpr9cOZXy3RTP4PMVeWP0MPv85VFLdFM/g8xV5Y/Qw+/wA5UlbB7/YpdHdePcfrZhyhPNN2huKiv+IltlnqpGUHRDaG4qM/p5bZZ6ryHV48iTKe3e+n6j3ZHSzGs7yrOKcDqKq7L6WNr/cVZRcx1FcVetw5FjIuw8Zc2UUE+zP227lMj55LZh71Bg/DP227lMinlSWzD3qd4ve+Rl0+zj3Yest4pzqglX3YDnfJEhv8D/RbBFHKWuwG83NN2T4EqKlg/DmX8vTz422TX7b+x9T5KRr8tDPYFcrS+Cuc42Rgn7jdy3RWz54IiIAiIgCIiAIiIAiIgCIiAoctZji5OM7Q1x8AV8rtZzcuNJcfEgei+kOFyPcs2ZP3HDxw9V86NHLl26A0+JJXMvvgTUY3v4LjJfQ2SH1qqmj7ZD1DyFWkNVcb4xuoeRVKevcz6LLMId+PMgS/RTP4PMVd2QeZh9/nKo5bopn8HmKurJ6GH3+cqSrg9/sUOjuvHuP1swZQdENobioz+nl9lnqpFv8ARDaG4qM/p5fZZ6ryHV4kmU9u99P1Huyelja/3FWUT3TqKrLKPOx9Z3lWcT3TqK5qL8xYyLsfGXNlDB+Gftt3KVEPKk9mHvUSB8M/bbuUuN70nsw96mePi+Rl0+zj3Yesu4wWvS45c03SH/Q/1WxRVr55M0/tBHi0KGlg93uaeXdam/1W4po7dwHTN6SYNF5vg4hdOXG+AGNzURvyvcPEA+q7Irh82EREAREQBERAEREAREQBERAUuVNisnZeJAeKteC09R1g6Vwu2eD6blo4eG8bDaKCmDwACBUda+jljiQWuzgFeNXJKdRwejanwwPmV0s5p5Qc3XUKpjfFw9X7Svp+Zyfl4mdjfAKlm+D+TiG9xbK9RuiviolRtfSXqnSOeo3jhJPQ9mqx81y/RTP4PMVcWVXioff5iu3t4MJEVHFMoc4uih1rIODaUAoGNA0AUC9nTcl97CPJsrjRkm03aLWrXJs4Jb1eLG0NxWB9ePl9lnqu/wAXgzk3CjmNcM+Iqn/TKSqDxbKjAGmIpmokabStv80dVcsjKo5pP4dnwu5wCy68bH1/uKs31unUV2tnBjJAkiG0E5yBQnWsv/TiU+ULmdJt3uSUMvhThmtPX5ts+coB9nftt3KXGJvSeyyniu/DgxkQKcVDpnpdFK6aKRB4OpJpB4pmGA5IwGgaFI46ePmipGuoxUbaor/jLOOJuhkmgrqGJXuUyOnJiO1zIZaygq52HURgM+hfQEpktLQ8zG+AVrBlWM91oHcuIUs3WWMp6QdWyUbWd8bu64LyNQ4OsjxZ0JwqXOe4xHk4YnqA6hQBbsiKYzm76QiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiA/9k="
          />
          <Card.Body>
            <Card.Title>Maglia Napoli 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://empolifc.com/wp-content/uploads/MagliaGaraAwayFronte-1.png"
          />
          <Card.Body>
            <Card.Title>Maglia Gela 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://store.sscalciobari.it/109340-thickbox_default/ssc-bari-maglia-kappa-kombat-home-2023-24-spedizione-in-7-giorni-lavorativi.jpg"
          />
          <Card.Body>
            <Card.Title>Maglia Bari 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="data:image/jpeg;base64,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"
          />
          <Card.Body>
            <Card.Title>Maglia Troina 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://magliecalciostore.com/media/cache/sylius_shop_product_thumbnail/e6/00/7eb2b2fd989751d6dca5f0c0d807.jpeg"
          />
          <Card.Body>
            <Card.Title>Maglia Cittanovese 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4 me-2">
          <Card.Img
            variant="top"
            src="data:image/jpeg;base64,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"
          />
          <Card.Body>
            <Card.Title>Maglia Nocerina 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SerieD;

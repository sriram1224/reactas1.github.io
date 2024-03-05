import React from 'react';
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap
import ReactImg from './download.jpeg'; // Import your image files


function ControlledCarousel() {
  return (
    <Carousel controls indicators>
      {/* Define Carousel items with images */}
      <Carousel.Item>
        <img className="d-block w-100" src={ReactImg} alt="slide 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="data:image/jpeg;base64,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"
         alt="slide 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="
        data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA3AMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EAEMQAAEDAgQEAwQGBwUJAAAAAAEAAgMEEQUSIWEGMUFRBxNxFCIywWKBkbHR4RUjcoKDofAlQlWT0iQ1RVJTlKKj8f/EABkBAQEBAQEBAAAAAAAAAAAAAAEAAgMEBf/EACERAQADAAICAgMBAAAAAAAAAAABAhEDExJRMWEUIUEE/9oADAMBAAIRAxEAPwD45a6lrK3JdXVOfCLi40sVa3ToFLDTLe/W6gBKg5Y3XbE3sDpzRZ6WandlmjfG6wcA8EXB5HVDA5phaqu9ETS/I8lwNVg1Qhd6K2Uq9tN0rQl0K+VQNVg1SylkTKplVi0OyltEXKplVi0LKpZFsoGXKsQRFxyUI1/O6Jl6qFo6XHqrEFZQhELVzKrFodlETKemhUc03N1YdCspyF1ey5ZBcdr7x58lVXcNFWyMToarWVrKALWM6rlRIXGORr22u0gi47LoC6GJxa0+IMbqMdqIpamKGIxxiNrYW2GnMncrKDVcNF1bLskaHb61MqJlXQz6JVg0PKuhqKGroYrFoWVTIj5FMqcGg5F3KjZCpkT4rQQy6mVH8tTIrFoGVTLY/wBao+Rcy6oxaDluSuFuuyPkXMqsWgZVMvVGLVzKrFoBbspk0Ry3RVLVYdBLVXKjkBVLUYtCyrhCM5gHI3VcoUdQNXbK4arZFDVA2/JWDNgiNbZWDdU4NCDTY6KwYitbz3Vw1ODQQxWyowj6qzWbJwABisGJgR7KwjTi0v5a75aaEat5S1i0qI13y02Iip5SsGlPLU8tN+UVPKKsWk/LXDHfonTHsoI1YdJeWqlidMYVfK2WcWk/LXCwjkE2Y1Ux7KxFHNPIndcLEy6NcMaMRUsXMunT7Ez5dlUsVh0uWXVCwJksXMuysWqBquGojWK4YiIQQarhiM1iIIloANYriNMNiRGxJiFpZsf2dkRseyaESI2FOAq2K/RXEKcbDsitg2W8Z0kIdlcQnsn20+yIKY9kpnCE9l3yD2TFbKykAF2mT/lJ5rPfiNUWyOayJjQLt0uSL7lcb89KzkulOG9vgz5B7LnkW6JOkxWofUwxyxxvZJp7vun1/Jeh9nDhdhDgNLg3W6clb/DN6TX5ZJg2VTCey1zTbIZpz2W8ZZRh2VPL2Wo6DZDMGyzMGJZhj2VTGtJ0GyGYUFnmPZUMa0DCqGFCIGNUMafMSoYlYiJYq5E46JUMSMKgjV2x7JhsYRWxrKLtiRWxJhkSMyFILMiRmwplkOyYZBstDSbIUdlOnGQbJiOAdkgiymTDKZPR0+yZZT7J1M9lNsjMplpMptkLFQ6mw2eVuYFo/utLj9gWbXiI01rMzjyOJR07cQkjDml/dwHum3K3VY9REHteS0v8tufQEZbaHTty13WrIYnZXS/qmubZxtazg3kOtuf9aJWfDY7xtjnZ5krH3Bd8IDCST2uL72XypvN76+pFYrXCZpW1bDZzn5dS1jfrHTT+a0uF6Xy6p7Q+Qxud7htdjiOlxpfbZIU7J5RG25F2ZSc9i+wJtb89Ol05gIq/0nRscbNmma5jjoQO318rLtS/7iXn5K/qXrTS7IbqVb7qUdAhPph2Xv8AJ4sYDqbZBdTLffTbJd9NsryWMN1OhOp9ltvpx2QXQbK1MV0CG6BbLoNkF0GytLJMKG6FaroB2QnQbKTLMSGYlpuhQzCokmWPIghGa1eCEhHI29NFdtTO22WomHpK78V4+/6ejp+30BjRdNRMB/8Ai+eMxXEGfBWTD1N/vTUXEWKx2/2gO/aYD8lrvhmeGz6FHEEyyHZfP4uLcVZ8Rpz6xfmmo+Nq5ts0NO70BCe+o6LPfRxDsmY4QvBx8ezj4qGI+jym2eIJaBfDWn0m/JXfRdN3uo4dk1HDsvCReI7B8WGf+78k7B4k0mX38Nmv9GUH7wjvr7PRf09vHAOyHidKJMOqG5C/3Lhvcj615YeJmHD/AIbWX+k9g+asPE6kHwYZKR9KYfgs25qTGaa8PJExOEIOHq+qY+OUOZ5ob5bJB8Ld73t9yTxbBKzhnDxitUxkxhe5srImD3Y3tMevQ3ve+hutweJ9O43dhLrDl+v1H/ilcZ8QoMSwitoY8MlZJUwuY15lBAJGhOi4V64+JeiZ5bfMGqDhyb2dlZIIhE5okDHbm9uWlvv6dVMLwd1Lj8bopmiOV2cB2a9teW979u+yYg8SsJdEyOXDsQYWtAJEcZH1e9f+SZb4i8Lve0yy1Eb28vMpHEj7AV0iafyXGY5P7D0roEJ8AWbFxtw1Lb+14G3/AOoCz7wFd3FvDf8AjdB/nBduyPbj4W9GHwbJeSHTkgu4u4c/xqi/zQl5eLuHLf73pD6PunzheM+hnxDsgviHZJS8X8Pa5cSjP7LSfkk5eNeHxyrHu/Zgefkrsj2uu0/xpPiHZBfEFmP42wEDSec7ezv/AASs/G2Eht2R1bz2EYH3uT219nqv6a7oggvjHZYD+OqM/DRVP7xaPmUB/Gkbh7tE765PyV3VXVZ6B0YQjGF5uXjCS3uUkbdy8lJP4rr3G7fJaOwZf5o76nou824AcyAuht+Vz6L2kdPTt+GGMfuhMsa0cg0ejQuccE+3Tv8Ap4ZlPO8+5BKf4ZTEeF4i+xZRTuGzV7mI2TUb7dVr8f7Z759PDx8P4vLq2hk+sgfNMR8J4w7lTBt+8rfxXuo5B3TLJd1fjwO+fTwsfBWMuI92maO7pfwCbZwFizuU9GD+27/SvbxzbpqObdXRC77PDR+HOJP+Oro2ehcfkE7B4aVdxmxOmaNonH5r2sc26ajn3V0VXfZ4o+GEzvhxaH64D/qUb4X1oBtidKR0vG78V76OfdVxGrfFh8z4n5JA33XXtY9Fi3DSI1uvPyTOPCs8L8RJP9o0bf3XlL4r4eVuGYbU10mI00jYGZsjYnXdte+iPHxlXNc41AMz4Bbno4X1v0SuPcUV/EmF/o+lHs0s5IqMj+bGguJA6Cw68+QXCscVne081flrU3hiTGx02LuDnWP6qEfMlNt8LsKzAz11ZK71aL/yQaPiqSWkjopA3RmTPm+EtNr3HouYZjvtvEMDQZJYoQGgmXTrr1vr6dPRdK0p/IcZtyz8y04fDfh2I/rGVMp+lOfkArv4A4aJ1o5P+4f+K9GZt0J8+67dcOU8lvbzh8PuGdbUko9J3fil5fD/AIctZtPOP45XpX1FuqWlnv1T1wPO3t5aTw/wJt8ntTf41/klZOAMIv7ktUPWS/yXqny7oL5d09cel2W9vKScAYb/AHaqpH2FKVHAVLl/VV8wP0mAr175t0F8u6umvpdt/bxMnAkg+CuYRvH+aWfwVVN0FXTvHo4L3L5d0B0m6uipjnvDwsvCWIMHuGB1u0lvvCSfw9iTXW9kedwQV9Cc9DMm6z+PHtr8i3p5xr0Rsm6QD9L3Cu2Rd3FoslRmTLMZIitk3WogY1WTbphk9uqx2S7ozZt0hssqN0xHUbrDbNrzRmVFuqQ3o6jdMR1O6wGVO4TDKndXinoI6jdK4+91RhE0bXWJtqBcpBlVujNqh3Rbj8ow1t4zryDqYRuyVBuxoOa9yb25JGqrKGnmY+mis5oe020NiLab766LexVtJ7WfJbc5fea55Iv94P8AJeXlLYnSDLZzxYZuZvqbL5Xh4WmH1JvFqxIkFQ+NzHPc0gC4cXciByuP6C0uGpaj9LUsoiBa2oAfcG5v1sPVZjpooNffBfz0BbpcD05LV4VqmS14zEmJovG1hyjN3K7cddmHnvb9S+nOqt0J1Vush1VuhOqt17/B49az6ndLvqd1luqh3QXVI7q8U031G6C+o3Wa6p3Q3VG6sTRdPugun3SDp90N026sJ90+6C6fdJOm3QzLurAcdNuhGZKul3QzLupMUPCuHpUOXQ5c9bONkRGyJIOVw5aB1sqI2U90gHojZE6MPtlRGzJBr1cSJTRbOjMn3WW2VEbLuthqtqEVtQsgTWV/P3SMFr6WOZpdAGtf25XP9FY1RhdVck0+bT4mEELW89T2jdcL/wCel512pzWrGYyqXC6k1EPmx5WC+YyEHTXpfnqvTwuhpxaGJjBe/utss01C57QVrj4q0YvyWs1DVbqjqlZ3nqhnXVjGgZ7qpmSHnFVMpKNJ0zKhmSRkXDIsk26ZUMyUL1Uv73QjRlVHSpUyKpepGDKqmVLF6rnRpIAlWBKii5tSsNSr3UUWgtcqwce66okLg25LocbqKJS4cVYElRRIW+tdue64okrXPddDioomA7mKmYqKKSZiuZioohJcquYqKKThcVwk2UUQlcxVC4qKKKPNiQqElRRCUJKrcqKIT//Z
        " alt="slide 3" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;

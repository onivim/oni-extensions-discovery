import { __parseQueryString as parseQueryString } from "../search"

test("a normal string", () => {
    const res = parseQueryString("foo bar baz")

    expect(res.text).toBe("foo bar baz")
    expect(res.type).toBeUndefined()
    expect(res.sort).toBe("stars")
})

test("an empty string", () => {
    const res = parseQueryString("")

    expect(res.text).toBe("")
    expect(res.type).toBeUndefined()
    expect(res.sort).toBe("stars")
})

test("a type theme string", () => {
    const res = parseQueryString("@type:theme foo")

    expect(res.text).toBe("foo")
    expect(res.type).toBe("theme")
    expect(res.sort).toBe("stars")
})

test("a type theme string 2", () => {
    const res = parseQueryString("@type: theme foo")

    expect(res.text).toBe("foo")
    expect(res.type).toBe("theme")
    expect(res.sort).toBe("stars")
})

test("a type theme string 3", () => {
    const res = parseQueryString("foo @type:theme")

    expect(res.text).toBe("foo")
    expect(res.type).toBe("theme")
    expect(res.sort).toBe("stars")
})

test("a plugin string", () => {
    const res = parseQueryString("@type:plugin something")

    expect(res.text).toBe("something")
    expect(res.type).toBe("plugin")
    expect(res.sort).toBe("stars")
})

test("a sort string", () => {
    const res = parseQueryString("@sort:new something")

    expect(res.text).toBe("something")
    expect(res.type).toBeUndefined()
    expect(res.sort).toBe("new")
})

test("a sort and type string", () => {
    const res = parseQueryString("@sort:new @type:plugin something")

    expect(res.text).toBe("something")
    expect(res.type).toBe("plugin")
    expect(res.sort).toBe("new")
})
